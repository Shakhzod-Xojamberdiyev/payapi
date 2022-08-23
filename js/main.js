var elOpenBtn  = document.querySelector(".site-header__open-btn");
var elCloseBtn = document.querySelector(".site-header__close-btn");
var elNavbar = document.querySelector(".site-header__wrapper");
console.log(elOpenBtn, elNavbar);

elOpenBtn.addEventListener("click", function (){
    elNavbar.classList.add("site-header__open");
})

elCloseBtn.addEventListener("click", function(){
    elNavbar.classList.remove("site-header__open");
})