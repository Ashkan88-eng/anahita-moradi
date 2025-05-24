//navbar variables

const nav =document.querySelector(".mobile-nav"),
navmenubtn = document.querySelector(".nav-menu-btn"),
navclosebtn = document.querySelector(".nav-close-btn");

//nav toggle function

const navtogglefunc=()=> nav.classList.toggle("active");
navmenubtn.addEventListener("click",navtogglefunc);
navclosebtn.addEventListener("click",navtogglefunc);

//them toggle variables

const themebtn=document.querySelectorAll('.theme-btn');


for(let i=0 ; i<themebtn.length ; i++) {
themebtn[i].addEventListener('click' , function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for(let j =0 ; j <themebtn.length; j++){
        themebtn[j].classList.toggle('light');
        themebtn[j].classList.toggle('dark');
    }
});
}