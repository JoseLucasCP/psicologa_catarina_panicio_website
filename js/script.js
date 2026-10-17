const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

/*Condição para validar erros no menu*/
if (!menuToggle || !navMenu) {
    throw new Error("Menu de navegação não encontrado.");
}

function fecharMenu() {
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
        fecharMenu();
    });
});


/* Fechar o menu ao clicar fora dele */

document.addEventListener("click", function (event) {

    const clicouNoMenu = navMenu.contains(event.target);
    const clicouNoBotao = menuToggle.contains(event.target);

    if (
        navMenu.classList.contains("active") &&
        !clicouNoMenu &&
        !clicouNoBotao
    ) {
        fecharMenu();
    }
});