const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const menuAberto = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";
});


/* Fechar o menu ao clicar em algum link */

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

        menuToggle.textContent = "☰";
    });
});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && navMenu.classList.contains("active")) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

        menuToggle.textContent = "☰";
    }
});

window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

        menuToggle.textContent = "☰";
    }
});