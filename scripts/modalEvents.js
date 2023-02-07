import { request_create_post, request_delete_post, request_edit_post } from "../../scripts/api.js";
import { render_posts } from "../../scripts/render.js";

export const modal_wrapper = document.querySelector(".modal_wrapper")

async function publish () {
const new_post = {
title: title.value,
content: content.value
}
await request_create_post(new_post)
render_posts()
}
    
async function save(data_id){
const edit_post = {
title: title.value,
content: content.value
}
await request_edit_post(edit_post,data_id)
render_posts()
}
    
async function post_delete(data_id){
await request_delete_post(data_id)
render_posts()
}
    
export function modal_events() {
const modal = document.querySelector(".modal")
const title = document.querySelector("#title")
const content = document.querySelector("#content")
const button_publish = document.querySelector(".publish")
    
modal.addEventListener("keyup", (event) => {
    title.value && content.value !== "" ? button_publish.classList.remove("disable") :
    !button_publish.classList.contains("disable") ? button_publish.classList.add("disable") : "" 
})
    
modal.addEventListener("click", (event) => {
    const id = event.target.id
    event.target.innerText == "Cancelar" || 
    event.target.innerText == "X" ? modal_wrapper.classList.add("none") :
    event.target.innerText == "Publicar" ? (publish()) : 
    event.target.innerText == "Salvar alterações" ? (save(id)) : 
    event.target.innerText == "Sim, excluir este post" ? (post_delete(id)) : ""
})
}

const modal_sucess = document.querySelector(".modal_sucess")
const modal_error = document.querySelector(".modal_error")

export function sucess(){
    modal_sucess.classList.remove("none")
    modal_sucess.addEventListener("click",(event) =>{
    event.target.classList.contains("link") ? 
    window.location.href = "/pages/login/index.html" : ""
})

setTimeout(() => {
    modal_sucess.classList.add("none")
    modal_sucess.classList.contains("move") ? 
    window.location.href = "/pages/login/index.html" : ""
}, 5000);
}

export function error(err){
    modal_error.classList.remove("none")
    modal_error.innerHTML = ""
    modal_error.insertAdjacentHTML("beforeend",`
    <span class="check_and_title">
    <img src="/assets/img/icone-x.png" alt="X">
    <p>Ocorreu um erro com o seu cadastro</p>
    </span>
    <small>${err}</small>`)

setTimeout(() => {
    modal_error.classList.add("none")
}, 5000);
}