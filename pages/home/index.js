import { request_user } from "../../scripts/api.js";
import { create_post, edit_post, delete_post, access_post } from "../../scripts/modal.js";
import { render_posts } from "../../scripts/render.js";
import { modal_events } from "../../scripts/modalEvents.js";


await request_user()
const data_user = JSON.parse(localStorage.getItem("user"))
!data_user ? window.location.href = "/pages/login/index.html" : ""

render_posts()

const nav_buttons = document.querySelector(".nav_buttons")
const post_list = document.querySelector(".post_list")
const modal_profile = document.querySelector(".modal_profile")
const avatar = document.querySelector(".avatar")

modal_profile.firstElementChild.innerText = data_user.email
avatar.src = data_user.avatar  

nav_buttons.addEventListener("click", (event) => {
    event.target.innerText == "Criar publicação" ? (create_post(), 
    modal_events()) : ""
})

avatar.addEventListener("mouseover",(event)=>{
    modal_profile.classList.remove("none")

nav_buttons.addEventListener("mouseleave",(event)=>{
    modal_profile.classList.add("none")
})
})

modal_profile.addEventListener("click",(event)=>{
   event.target.classList.contains("out") ? (localStorage.removeItem("user"),
   localStorage.removeItem("token"), window.location.href = "/pages/login/index.html") : ""
})

post_list.addEventListener("click",(event)=>{
    const id = event.target.id
    const data_post = JSON.parse(localStorage.getItem("posts")).find(post => post.id == id)
 
    event.target.innerText == "Editar" ? (edit_post(data_post.title,data_post.content,id),
    modal_events()) :
    event.target.innerText == "Excluir" ? (delete_post(id), modal_events()) :
    event.target.innerText == "Acessar publicação" ? (access_post(id), modal_events()) : ""
})




