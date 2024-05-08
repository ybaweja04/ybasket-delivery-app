//swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//hamburger
let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
}
