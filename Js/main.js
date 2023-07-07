const vendidos = window.vendidos;
const accesorio = window.accesorios;
const empaque = window.empaque;
const espejos = window.espejos;
const luces = window.luces;
const plastiqueria = window.plastiqueria;
const baterias = window.baterias;
const aceites = window.aceites;
const arrancador = window.arrancador;
const marcas = window.marcas;



var contenedorAccesorios = document.querySelector(".contenedor-accesorios .owl-carousel")
var contenedorModal = document.querySelector(".modalc");
var contenedorMarcas = document.querySelector(".contenedor-marcas .owl-carousel")

function cargarAccesorios(){
    contenedorAccesorios.innerHTML = "";
    accesorio.forEach(accesorio =>{
        const div =document.createElement("div");
        const mod = document.createElement("div");
        div.classList="accesorio";
        div.innerHTML = 
        
        `<div class="accesorio-img">
        <a href="#modal-${accesorio.id} " title="${accesorio.titulo}" class="btnModal">
        <img src="${accesorio.imagen}" alt="${accesorio.titulo}">
        </div>
        <div class="accesorio-det">
              <h5 class="accesorio-pr">
              S/.${Number(accesorio.precio).toFixed(2)}
              </h5>
        </div>  
       `;
        contenedorAccesorios.append(div);

        mod.id=`modal-${accesorio.id}`;
        mod.style= `font-family: 'negritaanchacuadrada'; position: fixed; top: 0px; left: 0px; z-index: 5; float: left; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); display: none;`
        mod.innerHTML= 
        `
        <a href="#cerrar"></a>
        <div id="modalContent">
          <a href="#cerrar" id="closeBtn">X</a>
        <div class="imageContainer">
        <img id="modalImage" class="pr" src="${accesorio.imagen}" alt="${accesorio.titulo}" width="400" height="200" >
      </div>
      <div class="textContainer">
        <h1>${accesorio.titulo}</h1>
        <p>Stock: ${accesorio.stock}</p>
        <p>Precio: ${Number(accesorio.precio).toFixed(2)}</p>
        <p>Marca: ${accesorio.marca}</p>
      </div>
      </div>
        `
        ;
        
        contenedorModal.append(mod);

        
    });
}

cargarAccesorios();

var contenedorVendidos = document.querySelector(".contenedor-vendidos .owl-carousel")
function cargarVendidos(){
    contenedorVendidos.innerHTML = "";
    vendidos.forEach(vendido =>{
        const div =document.createElement("div");
        const mod = document.createElement("div");
        div.classList="vendido";
        div.innerHTML = 
        
        `<div class="vendido-img">
        <a href="#modal-${vendido.id} " title="${vendido.titulo}" class="btnModal">
        <img src="${vendido.imagen}" alt="${vendido.titulo}">
        </div>
        <div class="vendido-det">
              <h5 class="vendido-pr">
              S/.${Number(vendido.precio).toFixed(2)}
              </h5>
        </div>    
       `;
        contenedorVendidos.append(div);

        mod.id=`modal-${vendido.id}`;
        mod.style= `font-family: 'negritaanchacuadrada'; position: fixed; top: 0px; left: 0px; z-index: 5; float: left; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); display: none;`
        mod.innerHTML= 
        `
        <a href="#cerrar"></a>
        <div id="modalContent">
          <a href="#cerrar" id="closeBtn">X</a>
        <div class="imageContainer">
        <img id="modalImage" src="${vendido.imagen}" alt="${vendido.titulo}" width="400" height="200" >
      </div>
      <div class="textContainer">
        <h1>${vendido.titulo}</h1>
        <p>Stock: ${vendido.stock}</p>
        <p>Precio: ${Number(vendido.precio).toFixed(2)}</p>
        <p>Marca: ${vendido.marca}</p>
      </div>
      </div>
        `
        ;
        
        contenedorModal.append(mod);
    });
}

cargarVendidos();

var contenedorRepuestos = document.querySelector(".contenedor-repuestos .owl-carousel");
function cargarRepuestos(){
    contenedorRepuestos.innerHTML = "";
    // contenedorModal.innerHTML ="";
    arrancador.forEach((repuesto) =>{
        const div = document.createElement("div");
        const mod = document.createElement("div");
        
        div.classList.add("repuesto");
        
        div.innerHTML = 
        
        `<div class="repuesto-img">
        <a href="#modal-${repuesto.id} " title="${repuesto.titulo}" class="btnModal">
              <img src="${repuesto.imagen}"  alt="${repuesto.titulo}"></a>
       
        </div>
        <div class="repuesto-det">
              <h5 class="repuesto-pr">
              S/.${Number(repuesto.precio).toFixed(2)}
              </h5>
        </div>  
       `;
       contenedorRepuestos.append(div);
        
        mod.id=`modal-${repuesto.id}`;
        mod.style= `font-family: 'negritaanchacuadrada'; position: fixed; top: 0px; left: 0px; z-index: 5; float: left; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); display: none;`
        mod.innerHTML= 
        `
        <a href="#cerrar"></a>
        <div id="modalContent">
          <a href="#cerrar" id="closeBtn">X</a>
        <div class="imageContainer">
        <img id="modalImage" src="${repuesto.imagen}" alt="${repuesto.titulo}"width="400" height="200" >
      </div>
      <div class="textContainer">
        <h1>${repuesto.titulo}</h1>
        <p>Stock: ${repuesto.stock}</p>
        <p>Precio: ${Number(repuesto.precio).toFixed(2)}</p>
        <p>Marca: ${repuesto.marca}</p>
      </div>
      </div>
        `
        ;
        
        contenedorModal.append(mod);
    });
}
cargarRepuestos();


var contenedorOfertas = document.querySelector(".contenedor-ofertas .owl-carousel")
function cargarOfertas(){
    contenedorOfertas.innerHTML = "";
    llantas.forEach(oferta =>{
        const div =document.createElement("div");
        const mod =document.createElement("div");
        div.classList="oferta";
        div.innerHTML = 
        
        `<div class="oferta-img">
        <a href="#modal-${oferta.id} " title="${oferta.titulo}" class="btnModal">
        <img src="${oferta.imagen}" alt="${oferta.titulo}" >
        </div>
        <div class="oferta-det">
              <h5 class="oferta-pr">
              S/.${Number(oferta.precio).toFixed(2)}
              </h5>
              <h5 class="oferta-of">
              S/.${Number(oferta.preciooferta).toFixed(2)}
              </h5>
         </div>
       `;
        contenedorOfertas.append(div);

        mod.id=`modal-${oferta.id}`;
        mod.style= `font-family: 'negritaanchacuadrada'; position: fixed; top: 0px; left: 0px; z-index: 5; float: left; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.2); display: none;`
        mod.innerHTML= 
        `
        <a href="#cerrar"></a>
        <div id="modalContent">
          <a href="#cerrar" id="closeBtn">X</a>
        <div class="imageContainer">
        <img id="modalImage" src="${oferta.imagen}" alt="${oferta.titulo}"width="400" height="200" >
      </div>
      <div class="textContainer">
        <h1>${oferta.titulo}</h1>
        <p>Stock: ${oferta.stock}</p>
        <p>Precio: ${Number(oferta.precio).toFixed(2)}</p>
        <p>Oferta: ${Number(oferta.preciooferta).toFixed(2)}</p>
        <p>Marca: ${oferta.marca}</p>
      </div>
      </div>
        `
        ;
        contenedorModal.append(mod);
    });
}

cargarOfertas();

var contenedorMarcasM = document.querySelector("#modalm");
function cargarMarcas(){
    contenedorMarcas.innerHTML = "";
    marcas.forEach(marca =>{
        const div =document.createElement("div");
        const mod =document.createElement("div");
        div.className="item";
        div.innerHTML =  

        ` <img src=" ${marca.imagen} " width="50" height="100" data-text="Marca: ${marca.titulo} " data-description=" ${marca.descripcion} ">
       `;
       contenedorMarcas.append(div);
    });
}

cargarMarcas();
