const menuButton = document.querySelector(".menubtn");
const menu = document.querySelector(".navbar");
const closeMenu = document.querySelector(".closebtn");

menuButton.addEventListener("click", (event)=>{
    menu.classList.toggle("isopen");
});
closeMenu.addEventListener("click", (event)=>{
    menu.classList.toggle("isopen");
});