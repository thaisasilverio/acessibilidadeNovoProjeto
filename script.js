'use strict'

const form = document.getElementById("formulario")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    limparErros()

    let valido = true

    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const cpf = document.getElementById("cpf")
    const cidade = document.getElementById("cidade")

    if (nome.value.trim() === "") {
        mostrarErro(nome, "erro-nome", "Preencha o nome")
        valido = false
    }

    if (!email.value.includes("@")) {
        mostrarErro(email, "erro-email", "E-mail inválido")
        valido = false
    }

    if (cpf.value.length !== 11 || isNaN(cpf.value)) {
        mostrarErro(cpf, "erro-cpf", "CPF inválido")
        valido = false
    }

    if (cidade.value.trim() === "") {
        mostrarErro(cidade, "erro-cidade", "Preencha a cidade")
        valido = false
    }

    if (valido) {
        alert("Cadastro realizado com sucesso!")
        form.reset()
    }
})

function mostrarErro(input, idErro, mensagem) {
    input.classList.add("input-erro")
    const erro = document.getElementById(idErro)
    erro.textContent = mensagem
}

function limparErros() {
    document.querySelectorAll(".erro").forEach(el => el.textContent = "")
    document.querySelectorAll("input").forEach(input => input.classList.remove("input-erro"))
}