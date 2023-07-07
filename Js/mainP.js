const productos = window.productos;

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
cargarProductos(productos);
ordenar(productos);

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
    
}))

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "ctodos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria?.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            ordenar(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
            ordenar(productos);
        }

    })
});
// var contenedorMarcasM = document.querySelector("#modalp");
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =
         `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo} ">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">S/.${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Ver</button>
            </div>
        `;

        contenedorProductos.append(div);
        // Para ver el modal
        const botonVer = div.querySelector(".producto-agregar");
        botonVer.addEventListener("click", () => mostrarModal(producto));
    })   
}
function mostrarModal(producto) {
    const modalP = document.getElementById("modalP");
    const modalImagen = modalP.querySelector(".producto-imagenP");
    const modalTitulo = modalP.querySelector(".producto-tituloP");
    const modalPrecio = modalP.querySelector(".producto-precioP");
    const modalMarca = modalP.querySelector(".producto-marcaP");
    const modalStock = modalP.querySelector(".producto-stockP");
    const modalPrecioOferta = modalP.querySelector(".producto-precioOfertaP");
    modalImagen.src = producto.imagen;
    modalImagen.alt = producto.titulo;
    modalTitulo.textContent = producto.titulo;
    modalPrecio.textContent = `Precio: S/.${producto.precio}`;
    if (producto.preciooferta !== 0) {
        modalPrecioOferta.textContent = `Precio Oferta: S/.${producto.preciooferta}`;
      } else {
        modalPrecioOferta.textContent = "";
      }
    modalMarca.textContent = `Marca: ${producto.marca}`;
    modalStock.textContent = `Stock: ${producto.stock}`;
    modalP.style.display = "block";
  }
  const closeModalP = document.querySelector(".closeP");
  closeModalP.addEventListener("click", () => {
    const modalP = document.getElementById("modalP");
    modalP.style.display = "none";
  });
  

    function ordenar(productos) {

    const selectUl = document.querySelector('.select_ul');
  
    selectUl.addEventListener('click', function(event) {
      if (event.target.closest('.option')) {
        const option = event.target.closest('.option');
        const optionText = option.querySelector('p').textContent;
        switch (optionText) {
            case 'Nombre, creciente':
                ordenarPrecioAZ(productos);
                break;
            case 'Nombre, decreciente':
                ordenarPrecioZA(productos);
                break;
            case 'Precio más alto':
                ordenarPrecioAlto(productos);
                
                break;
            case 'Precio más bajo':
                ordenarPrecioBajo(productos);
                break;
            default:
                break;
        }
      }
    });
    }
    function ordenarPrecioAlto(productos) {
        productos.sort((a, b) => b.precio - a.precio);
        cargarProductos(productos);
    }

    function ordenarPrecioBajo(productos) {
        productos.sort((a, b) => a.precio - b.precio);
        cargarProductos(productos);
    }
    function ordenarPrecioAZ(productos) {
        productos.sort((a, b) => a.titulo.localeCompare(b.titulo));
        cargarProductos(productos);
    }
    function ordenarPrecioZA(productos) {
        productos.sort((a, b) => b.titulo.localeCompare(a.titulo));
        cargarProductos(productos);
    }

