const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");

    const menuAberto = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuAberto
    );
});

/*Fechar o menu ao clicar em algum link*/
navLinks.forEach(function (link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});