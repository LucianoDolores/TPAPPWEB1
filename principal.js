

import tienda from "./cafe.js"
import tienda from "./cafe.js"  

const contenedor = document.getElementById("contenedor")

let contenidoHTML = ``;

tienda.carta.forEach((carta)=>{

    contenidoHTML += `
    <dt>${carta.nombre}</dt>
    <img ${carta.imagen}>
    <dd>${carta.descripcion}</dd>
    <dd>${carta.precio}</dd>`


})

contenedor.innerHTML = "HOLAAAAAAAAAAAAAAAAAAAAAAAAAA"