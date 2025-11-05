const button = document.querySelector('.hamburger');
const menu = document.querySelector(".mobil")
const cross = document.querySelector(".cross")
button.addEventListener('click', () => {
   menu.classList.add("dej")
    button.style.display = "none";
   cross.style.display = "block";
})
cross.addEventListener('click', () => {
    menu.classList.remove("dej")
    button.style.display = "block";
    cross.style.display = "none";
})
