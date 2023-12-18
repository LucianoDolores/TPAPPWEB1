

import tienda from "./cafe.js"  


const productos = tienda.carta;



let contenidoHTML = ``;

tienda.carta.forEach((carta)=>{

    contenidoHTML += `<article class="producto">
    <figure class="producto__fig">
        <img src="${carta.imagen}" width="80" height="80" />
    </figure>
    <div class="producto__datos">
        <h3>${carta.nombre}</h3>
        <div>${carta.descripcion}</div>
        <div>$ ${carta.precio}</div>
    </div>
</article>`


});

const contenedor = document.getElementById("contenedor-productos");
contenedor.innerHTML = contenidoHTML