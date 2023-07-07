document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slides img");
    var indicators = document.querySelectorAll(".slider-indicator");
    var currentSlide = 0;
  
    function showSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        indicators[i].classList.remove("active");
      }
  
      slides[index].classList.add("active");
      indicators[index].classList.add("active");
      currentSlide = index;
    }
  
    function nextSlide() {
      var nextIndex = currentSlide + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
  
    setInterval(nextSlide, 3000); 
  
    for (var i = 0; i < indicators.length; i++) {
      (function(index) {
        indicators[i].addEventListener("click", function() {
          showSlide(index);
        });
      })(i);
    }
  
    showSlide(0);
  });

/* Modal para las marcas aplicando el carousel */
  $(document).ready(function() {
    $(".contenedor-marcas .owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      nav:false,
      navText : ['<i class="fa fa-motorcycle" aria-hidden="true"></i>','<i class="fa fa-motorcycle" aria-hidden="true"></i>'],
      autoplayTimeout: 4500,
    });
  
    $(".owl-carousel .item img").click(function() {
      var imageUrl = $(this).attr("src");
      var text = $(this).data("text");
      var description = $(this).data("description");
      $("#modalImageM").attr("src", imageUrl);
      $("#modalTextM").html("<p>" + text + "</p><p>" + description + "</p>");
      $("#myModalM").css("display", "block");
    });
  
    $(".closeM").click(function() {
      $("#myModalM").css("display", "none");
    });
  });


  $(document).ready(function() {
    $(".contenedor-accesorios .owl-carousel, .contenedor-vendidos .owl-carousel, .contenedor-repuestos .owl-carousel, .contenedor-ofertas .owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      // autoplay: true,
      nav:true,
      navText : ['<i class="fa fa-motorcycle" aria-hidden="true"></i>','<i class="fa fa-motorcycle" aria-hidden="true"></i>'],
      responsive: {

        0: {
          items: 2
        },
  
        768: {
          items: 3
        },
        1200: {
          items: 5
        }
      }
    });
  
    $("").click(function() {
      var imageUrl = $(this).attr("src");
      var text = $(this).data("title");
      var description = $(this).data("description");
      $("#modalImageI").attr("src", imageUrl);
      $("#modalTextI").html("accesorio title",text);
      $("#myModalI").css("display", "block");
    });
  
    $(".closeI").click(function() {
      $("#myModalI").css("display", "none");
    });
  });
  

  