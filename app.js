const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

openMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

sections.forEach((section) => { observer.observe(section) })