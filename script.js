let lastScrollY = window.scrollY;

window.addEventListener("scroll",() => {
    const header = document.querySelector("header");

    if(window.scrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)";

    } else {
        header.style.transform = "translateY(0)";
    }

    lastScrollY = window.scrollY;

});