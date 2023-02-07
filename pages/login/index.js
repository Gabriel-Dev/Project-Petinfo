import { request_login } from "../../scripts/api.js"

const form = document.querySelector(".form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const alert_email = document.querySelector(".alert_email")
const alert_password = document.querySelector(".alert_password")
const access = document.querySelector(".access")

async function login() {
access.innerHTML = `<img class="spinner" src="/assets/img/spinner.png" alt="spinner"></img>`
    
const user = {
email: email.value,
password: password.value,
}

const message = await request_login(user)
message.includes("email") ? alert_email.classList.remove("none") :
message.includes("senha") ? alert_password.classList.remove("none") : ""

access.innerHTML = "Acessar"
}

form.addEventListener("keyup", (event) => {
    email.value && password.value !== "" ? access.classList.remove("disable") :
    !access.classList.contains("disable") ? access.classList.add("disable") : ""

    !alert_email.classList.contains("none") ? alert_email.classList.add("none") :
    !alert_password.classList.contains("none") ? alert_password.classList.add("none") : ""
})

form.addEventListener("click", (event) => {
    event.preventDefault()
    event.target.innerText == "Cadastrar" ?
    window.location.href = "/pages/register/index.html" :
    event.target.innerText == "Acessar" ? login() : ""
})

