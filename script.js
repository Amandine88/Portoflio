const burger=document.querySelector(".burger");
const menu=document.querySelector("nav ul");
burger.addEventListener("click",()=>{
    menu.classList.toggle("open"); 
    burger.classList.toggle("active");
});
const links = document.querySelectorAll("nav a");
links.forEach((link)=>{
link.addEventListener("click", () => {menu.classList.remove("open");
    burger.classList.remove("active");
});
});