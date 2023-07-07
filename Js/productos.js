const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

jQuery(document).ready(function($) {
    $('.carousel-main').owlCarousel({
      // Configuración del slider
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1500,
      margin: 10,
      nav:false,
      dots: false,
    });
  });

  const botonesCategoria = document.querySelectorAll('.boton-categoria');
  const titulo = document.getElementById('titulo-principal');
  // const filtrar = document.querySelector('.default_option p');
  // console.log(filtrar);
  
  botonesCategoria.forEach((boton) => {
    boton.addEventListener('click', (event) => {
      // Obtener el título de la categoría del botón clickeado
      const categoria = event.target.textContent.trim();
      titulo.textContent = categoria;
    });
  });
  
  $(".default_option").click(function(){
    $(this).parent().toggleClass("active");
  })
  
  $(".select_ul li").click(function(){
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
  });
  

  


// responsivo modo cel los filtros
  const abrir = document.getElementById("navbar-toggler");
  const posDiv = document.getElementById("pos");
  abrir.addEventListener('click', () => {
    if (posDiv.classList.contains("pos-active")) {
      posDiv.classList.remove("pos-active");
    } else {
      posDiv.classList.add("pos-active");
    }
  });