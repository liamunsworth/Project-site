let lastScrollY = window.scrollY;
let headerHeight = 0;
//header on each page
const base = window.location.pathname.includes("/Project-site/") ? "/Project-site/" : "/";
fetch(base + "header.html")
  .then(res => res.text())
  .then(html => {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = html;

const header = headerContainer.querySelector("header");
headerHeight = header.offsetHeight;

// ✅ make body padding match the real header height on every page
document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

window.addEventListener("resize", () => {
  headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
});

//toggle dark

    // 1) Grab the button from the page
const toggleBtn = document.querySelector("#themeToggle");

// 2) When the page loads, check if a theme was saved before
const savedTheme = localStorage.getItem("theme"); // returns "dark", "light", or null

// 3) If the saved theme was dark, apply it immediately
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// 4) When the button is clicked, toggle dark mode
toggleBtn.addEventListener("click", () => {
  // Flip the class on/off
  document.body.classList.toggle("dark");

  // 5) After toggling, check what the current theme is
  const isDark = document.body.classList.contains("dark");

  // 6) Save the new theme so it persists after refresh
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

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


