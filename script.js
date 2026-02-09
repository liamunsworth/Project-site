let lastScrollY = window.scrollY;
let headerHeight = 0;

fetch("./header.html")
  .then(res => res.text())
  .then(html => {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = html;

    const header = headerContainer.querySelector("header");
    headerHeight = header.offsetHeight;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      // Always show at the very top
      if (currentScrollY <= 0) {
        header.style.transform = "translateY(0)";
        lastScrollY = currentScrollY;
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY) {
        header.style.transform = `translateY(-${headerHeight}px)`;
      }
      // Scrolling up → show
      else {
        header.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    });
  })
  .catch(console.error);


