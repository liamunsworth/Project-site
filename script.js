let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    // scrolling UP
    header.style.transform = "translateY(0)";
  } else {
    // scrolling DOWN
    header.style.transform = "translateY(-100%)";
  }

  lastScrollY = window.scrollY;
});
