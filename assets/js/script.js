//navbar variables

const nav =document.querySelector(".mobile-nav"),
navmenubtn = document.querySelector(".nav-menu-btn"),
navclosebtn = document.querySelector(".nav-close-btn");

//nav toggle function

const navtogglefunc=()=> nav.classList.toggle("active");
navmenubtn.addEventListener("click",navtogglefunc);
navclosebtn.addEventListener("click",navtogglefunc);

