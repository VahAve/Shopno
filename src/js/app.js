const header = document.querySelector(".header");

window.addEventListener("scroll", function() {
   let scrollPos = window.scrollY;
   
   if (scrollPos > 0) {
      header.classList.add("green");
   } else {
      header.classList.remove("green");
   };  
});

$(document).ready(function(){
   
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });


   $('.about__slider').slick({
      arrows: false,
      dots: true,
      centreMode: true,
      autoplay: true,
   });

   $('.review__inner').slick({
      autoplay: true,
      speed: 1800,
   });

});

const servicesButton = document.querySelectorAll(".services__button");
const servicesItem = document.querySelectorAll('.services__item');




for(let servicesItems of servicesItem) {
   servicesItems.addEventListener("click", function() {
      servicesItems.classList.toggle("clicked");
   })
}




