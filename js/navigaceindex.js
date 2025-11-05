//hlavní stránka
let uvod = document.querySelector(".first")
let uvod2 = document.querySelector(".second")
let pruh = document.querySelector(".nadpruh")
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


uvod2.addEventListener("click", function(){

    const scrollY = pruh.offsetTop;
    window.scrollTo({
        top: scrollY - 70,
        behavior: 'smooth'
    })
})



document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
    });
});