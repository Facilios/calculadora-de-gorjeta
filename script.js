let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", ReceberValorConta)

function ReceberValorConta(event) {
    conta = Number(event.target.value)
}

const PessoasInput = document.querySelector("#pessoas")
PessoasInput = addEventListener ("Input", ReceberQtdPessoas)

function ReceberQtdPessoas (event) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector (".pessoas .input-box")

    if (event.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    }
    else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(event.target.value)
    }
}