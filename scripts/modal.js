import { formatted_date } from "../../scripts/render.js";
export const modal_wrapper = document.querySelector(".modal_wrapper")

export function create_post(){
    modal_wrapper.classList.remove("none")
    modal_wrapper.innerHTML = ""

    modal_wrapper.insertAdjacentHTML("beforeend",`
    <div class="modal">
    <div class="title_and_close">
    <h3>Criando novo post</h3>
    <button class="button_default button_grey close_button">X</button>
    </div>
    <label for="title"> Título do post
    <input class="inputs" id="title" type="text" placeholder="Digite o titulo aqui...">
    </label>
    <label for="content">Conteúdo do post
    <textarea class="inputs" placeholder="Desenvolva o conteúdo do post aqui..." 
    name="post" id="content" cols="30" rows="10"></textarea>
    </label>
    <span class="cancel_and_accept">
    <button class="button_default button_grey ">Cancelar</button>
    <button class="button_default button_brand disable publish">Publicar</button>
    </span>
    </div>`)
}

export function edit_post(data_title,data_content,data_id){
    modal_wrapper.classList.remove("none")
    modal_wrapper.innerHTML = ""

    modal_wrapper.insertAdjacentHTML("beforeend",`
    <div class="modal">
    <div class="title_and_close">
    <h3>Edição</h3>
    <button class="button_default button_grey close_button">X</button>
    </div>
    <label for="title"> Título do post
    <input class="inputs" id="title" type="text" placeholder="Digite o titulo aqui..."
    value="${data_title}">
    </label>
    <label for="content">Conteúdo do post
    <textarea class="inputs" placeholder="Desenvolva o conteúdo do post aqui..." 
    name="post" id="content" cols="30" rows="10">${data_content}</textarea>
    </label>
    <span class="cancel_and_accept">
    <button class="button_default button_grey ">Cancelar</button>
    <button id="${data_id}"class="button_default button_brand disable publish">Salvar alterações</button>
    </span>
    </div>`)
}

export function delete_post(data_id){
    modal_wrapper.classList.remove("none")
    modal_wrapper.innerHTML = ""

    modal_wrapper.insertAdjacentHTML("beforeend",`
    <div class="modal delete">
    <div class="title_and_close">
    <h3>Confirmação de exclusão</h3>
    <button class="button_default button_grey close_button">X</button>
    </div>
    <h3>Tem certeza que deseja excluir este post?</h3>
    <p>Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes de concluir</p>
    <span class="delete">
    <button class="button_default button_grey ">Cancelar</button>
    <button id="${data_id}"class="button_default button_alert">Sim, excluir este post</button>
    </span>
    </div>`)
}

export function access_post(data_id){
    const data_post = JSON.parse(localStorage.getItem("posts")).find(post => post.id == data_id)
    const {title, content, createdAt, user} = data_post
    const {username, avatar} = user

    modal_wrapper.classList.remove("none")
    modal_wrapper.innerHTML = ""

    modal_wrapper.insertAdjacentHTML("beforeend",`
    <div class="modal">
    <div class="title_and_close">
    <span class="profile_and_date">
    <img src="${avatar}" alt="avatar do usuário">
    <p>${username}</p>
    <p class="date">${formatted_date(createdAt)}</p>
    </span>
    <button class="button_default button_grey close_button">X</button>
    </div>
    <div>
    <h3>${title}</h3>
    <p class="text" >${content}</p>
    </div>
    </div>`)
}

