//hlavní stránka
let uvod = document.querySelector(".first")
function checkScroll2(){
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if(scrollY > 0){
        navbar.style.transition = "0.6s ease"
        navbar.classList.remove("navigacestoji")
        navbar.classList.add('navigaceposun');
    }
    else if(scrollY === 0){
        navbar.classList.remove('navigaceposun');
        navbar.classList.add("navigacestoji")
    }

}
window.addEventListener('scroll', checkScroll2);
window.addEventListener('load', checkScroll2);

uvod.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})