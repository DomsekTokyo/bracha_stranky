const button = document.querySelector('.hamburger');
const menu = document.querySelector(".mobil")
const cross = document.querySelector(".cross")

const kam1 = document.querySelector(".one1")
const kam2 = document.querySelector(".two1")


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

kam1.addEventListener('click', (e) => {
    e.preventDefault()


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

})

kam2.addEventListener('click', (e) => {
    e.preventDefault()
    let y = document.querySelector(".omne").offsetTop;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    })
})
