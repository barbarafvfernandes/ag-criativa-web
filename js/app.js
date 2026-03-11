import { alternarVisibilidade } from "./utils.js";

const fecharSidebar = document.getElementById("close"); 
const sideBar = document.querySelector(".menu__lista--sidebar"); 
const listaMenu = document.getElementById("lista"); 
const listarClass = document.querySelector(".menu__lista--icon"); 

fecharSidebar.addEventListener('click', (event) =>{
    event.preventDefault();
    alternarVisibilidade(sideBar,listarClass);
});

listaMenu.addEventListener('click', (event)=>{
    event.preventDefault();
    alternarVisibilidade(listarClass, sideBar)
})