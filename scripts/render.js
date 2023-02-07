import { request_posts } from "../../scripts/api.js";

const post_list = document.querySelector(".post_list")

export async function render_posts(){
    await request_posts()
    const data_posts = JSON.parse(localStorage.getItem("posts"))
    const data_user = JSON.parse(localStorage.getItem("user"))

    post_list.innerHTML = ""
    
    data_posts.forEach(post => {
        const {id, title, content, createdAt, user} = post
        const {username, avatar} = user
        let verf = ""

        data_user.id !== user.id ? verf = "none" : ""

        post_list.insertAdjacentHTML("beforeend",`
        <li class="post">
        <div>
        <span class="profile_and_date">
        <img src="${avatar}" alt="avatar do usuário">
        <p>${username}</p>
        <small class="date">${formatted_date(createdAt)}</small>
        </span>
        <span class="edit_and_delete ${verf}">
        <button id="${id}" class="button_default button_white medium ">Editar</button>
        <button id="${id}" class="button_default button_grey medium ">Excluir</button>
        </span>
        </div>
        <h2>${title}</h2>
        <p>${content.substr(0,145) + "..."}</p>
        <p id="${id}" class="link">Acessar publicação</p>
        </li>`)
    });
    }
    
export function formatted_date(date){
const mounths = [
"Janeiro", "Fevereiro", "Março", "Abril",
"Maio", "Junho", "Julho","Agosto",
"Setembro","Outubro","Novembro","Dezembro"
];

const formatted = `${mounths[new Date(date).getMonth()]} de ${new Date(date).getFullYear()}` 

return formatted
}





