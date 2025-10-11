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

