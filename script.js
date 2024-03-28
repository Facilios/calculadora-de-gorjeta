let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", ReceberValorConta)

function ReceberValorConta(event) {
    conta = Number(event.target.value)
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

    porcentagem = parseFloat(event.target.value) / 100
    console.log(porcentagem);
}

const gorjetaInput = document.querySelector ("#outra")
gorjetaInput.addEventListener("Input", receberPorcentagemBotao)