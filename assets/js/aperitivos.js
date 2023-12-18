import tienda from "./cafe.js"  


const productos = tienda.aper;



let contenidoHTML = ``;

tienda.aper.forEach((aper)=>{

    contenidoHTML += `<article class="producto">
    <figure class="producto__fig">
        <img src="${aper.imagen}" width="80" height="80" />
    </figure>
    <div class="producto__datos">
        <h3>${aper.nombre}</h3>
        <div>${aper.descripcion}</div>
        <div>$ ${aper.precio}</div>
    </div>
</article>`


});

const contenedor = document.getElementById("contenedor-productos");
contenedor.innerHTML = contenidoHTML