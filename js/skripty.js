const scrollMap = [
    { btn: ".one", target: ".jedna" },
    { btn: ".two", target: ".dva" },
    { btn: ".three", target: ".tri" },
    { btn: ".four", target: ".ctyri" },
];

const navbar = document.querySelector(".navbar");
const navmobile = document.querySelector(".mobil");
const ham = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
vyska = navbar.offsetHeight;

scrollMap.forEach(item => {
    const btn = document.querySelector(item.btn);

    btn.addEventListener("click", (e) => {
        e.preventDefault();


        const target = document.querySelector(item.target);
        const kam = target.getBoundingClientRect().top + window.scrollY;





        window.scrollTo({
            top: kam - vyska,
            behavior: "smooth"
        });


    });
});



const scrollMap2 = [
    { btn: ".one1", target: ".jedna" },
    { btn: ".two1", target: ".dva" },
    { btn: ".three1", target: ".tri" },
    { btn: ".four1", target: ".ctyri" },
];


scrollMap2.forEach(item => {
    const btn = document.querySelector(item.btn);

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Přepočítat pozici cíle
        const target = document.querySelector(item.target);
        const kam = target.getBoundingClientRect().top + window.scrollY;

        // Dynamicky zjistit viditelné menu


        // Scroll
        window.scrollTo({
            top: kam - 150,
            behavior: "smooth"
        });


    });
});

ham.addEventListener("click", () => {
    ham.style.display = "none";
    cross.style.display = "flex";
    navbar.style.opacity= "1";
    navmobile.classList.add("mobileopen");
});

cross.addEventListener("click", () => {
    ham.style.display = "flex";
    cross.style.display = "none";
    navmobile.classList.remove("mobileopen");

});

function checkwindow(){
    if (window.innerWidth > 660) {
        navmobile.style.opacity = "0";
        navmobile.classList.remove("mobileopen");
        navbar.style.display = "flex";
        ham.style.display = "none";
        cross.style.display = "none";

    } else {

        ham.style.display = "flex";
        ham.addEventListener("click", () => {

            ham.style.display = "none";
            cross.style.display = "flex";
            navmobile.style.opacity = "1";
            navbar.style.display = "none";
            navmobile.classList.add("mobileopen");

        });

        cross.addEventListener("click", () => {
            navmobile.classList.remove("mobileopen");
            ham.style.display = "flex";
            cross.style.display = "none";

            setTimeout(() => { navbar.style.display = "flex"; }, 400);
        });

    }
}

// Spustí při načtení stránky
checkwindow();

// Spustí při změně velikosti okna
window.addEventListener("resize", checkwindow);

