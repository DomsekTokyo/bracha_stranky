//ostatní stránky
function checkScroll() {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (scrollY > 0) {
        navbar.style.transition = "0.6s ease-in-out";
        navbar.style.top = "0px";
    } else {
        navbar.style.top = "55px";
    }
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

let formular = document.querySelector('.second');
let formular2 = document.querySelector('.formular');
let informace = document.querySelector('.second');

informace.addEventListener('click', (e) => {
    let y = document.querySelector(".omne").offsetTop;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})
formular.addEventListener('click', (e) => {
    let y = formular2.offsetTop;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })

})