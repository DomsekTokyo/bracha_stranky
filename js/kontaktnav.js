const button = document.querySelector('.hamburger');
const menu = document.querySelector(".mobil")
const cross = document.querySelector(".cross")
const informace3 = document.querySelector('.second2');


button.addEventListener('click', () => {
    menu.style.height = 400 + "px";
    menu.classList.add("dej")
    button.style.display = "none";
    cross.style.display = "block";
})


cross.addEventListener('click', () => {
    menu.style.height = 80 + "px";
    menu.classList.remove("dej")
    button.style.display = "block";
    cross.style.display = "none";
})


informace3.addEventListener('click', (e) => {
    let y = document.querySelector(".formular").offsetTop;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})
