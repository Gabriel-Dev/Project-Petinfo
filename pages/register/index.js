import { request_register } from "../../scripts/api.js"

const form = document.querySelector(".form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const avatar = document.querySelector("#avatar")
const password = document.querySelector("#password")
const register = document.querySelector(".register")

async function create_user(){
register.innerHTML = `<img class="spinner" src="/assets/img/spinner.png" alt="spinner"></img>`

const new_user = {
username: username.value ,
email: email.value ,
password: password.value ,
avatar: avatar.value,
}
await request_register(new_user)

register.innerHTML = "Cadastrar"
}

form.addEventListener("keyup",(event)=>{
    username.value && email.value && avatar.value && password.value !== "" && email.value.includes("@") ? 
    register.classList.remove("disable") :!register.classList.contains("disable") ? 
    register.classList.add("disable") : ""
})

form.addEventListener("click",(event)=>{
    event.preventDefault()
    
    event.target.innerText == "Voltar para o login" ? 
    window.location.href = "/pages/login/index.html" : ""

    event.target.innerText == "Cadastrar" ? create_user() : ""
})


