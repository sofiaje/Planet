const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const icon = document.querySelector(".fa-solid");
console.log(icon)

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)

    }
})