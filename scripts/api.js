import { modal_wrapper, sucess , error } from "../../scripts/modalEvents.js"

const baseURL = "http://localhost:3333"
const token = localStorage.getItem("token") || ""

export async function request_register(data_user) {
    
    const request = await fetch(`${baseURL}/users/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data_user)
    })
    const response = await request.json()

    request.status == 200 ? sucess() : error(response.message)
}

export async function request_login(data_login) {
    
    const request = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data_login)
    })
    const reponse = await request.json()

    request.status == 200 ? (localStorage.setItem("token",reponse.token),
    await request_user(), window.location.href = "/pages/home/index.html") : ""
    
    return reponse.message
}

export async function request_user() {

    const request = await fetch(`${baseURL}/users/profile`,{
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },

    })
    const reponse = await request.json()

    request.status == 200 ? localStorage.setItem("user", JSON.stringify(reponse)) : 
    console.log(reponse.message)

}

export async function request_create_post(data_post) {

    const request = await fetch(`${baseURL}/posts/create`,{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data_post)
    })
    const reponse = await request.json()

    request.status == 200 ? (modal_wrapper.classList.add("none")) : 
    console.log(reponse.message)
}

export async function request_posts() {

    const request = await fetch(`${baseURL}/posts`,{
    method: "Get",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },
    })
    const reponse = await request.json()

    request.status == 200 ? localStorage.setItem("posts",JSON.stringify(reponse)) : 
    console.log(reponse.message)
}

export async function request_edit_post(data_post,id) {

    const request = await fetch(`${baseURL}/posts/${id}`,{
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data_post)
    })

    const reponse = await request.json()
    request.status == 200 ? (modal_wrapper.classList.add("none")) : 
    console.log(reponse.message)
}

export async function request_delete_post(id) {

    const request = await fetch(`${baseURL}/posts/${id}`,{
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    },
    })
    const reponse = await request.json()

    request.status == 200 ? (modal_wrapper.classList.add("none"),sucess()) : 
    console.log(reponse.message)
}