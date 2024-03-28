let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", ReceberValorConta)

function ReceberValorConta(event) {
    conta = Number(event.target.value)
    calcular()
}

const PessoasInput = document.querySelector("#pessoas")
PessoasInput.addEventListener ("Input", ReceberQuantidadePessoas)

function ReceberQuantidadePessoas (event) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector (".pessoas .input-box")

    if (event.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(event.target.value)
    }

    calcular()
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botao.addEventListener("click", receberPorcentagemBotao)
})

function receberPorcentagemBotao(event) {
    botoesGorjeta.forEach(botao =>{
        botao.classList.remove("botao-ativo")

        if(botao.value ===event.target.value) {
            botao.classList.add("botao-ativo")
        }
    })

    if(event.target.value !== ""){
        porcentagem =  parseFloat(event.target.value) / 100
    } else {
        porcentagem = 0
    }

    calcular()
}

const gorjetaInput = document.querySelector ("#outra")
gorjetaInput.addEventListener("Input", receberPorcentagemBotao)

function calcular() {
    if(conta !== && porcentagem !== 0 && pessoas !== 0){
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = `R$ ${conta * porcentagem / pessoas.toFixed(2)}`

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`
    }
}

const = botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", limpar)

function limpar (){
    contaInput.value = ""

    botoesGorjeta.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    gorjetaInput.value = ""

    PessoasInput.value = ""

    document.querySelector(".gorjeta-total > strong"),innerHTML = "R$ 0.00"
    document.querySelector(".total > strong"),innerHTML = "R$ 0.00"

    let conta = 0
    let pessoas = 0
    let porcentagem = 0

}