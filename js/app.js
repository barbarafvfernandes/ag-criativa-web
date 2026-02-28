import { alternarVisibilidade } from "./utils.js";

const fecharSidebar = document.getElementById("close");
const sideBar = document.querySelector(".sidebar");
const listaMenu = document.getElementById("lista");
const listarClass = document.querySelector(".listar");

fecharSidebar.addEventListener('click', (event) =>{
    event.preventDefault();
    alternarVisibilidade(sideBar,listarClass);
});

listaMenu.addEventListener('click', (event)=>{
    event.preventDefault();
    alternarVisibilidade(listarClass, sideBar)
})