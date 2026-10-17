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

/* FAQ */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const faqItem = question.closest(".faq-item");
        const faqIcon = question.querySelector(".faq-icon");
        const faqAberta = faqItem.classList.contains("active");

        /* Fecha todas as perguntas */
        faqQuestions.forEach(function (otherQuestion) {

            const otherItem = otherQuestion.closest(".faq-item");
            const otherIcon = otherQuestion.querySelector(".faq-icon");

            otherItem.classList.remove("active");
            otherQuestion.setAttribute("aria-expanded", "false");
            otherIcon.textContent = "+";
        });

        /* Abre a pergunta clicada e fecha outra caso ela estivesse aberta */
        if (!faqAberta) {
            faqItem.classList.add("active");
            question.setAttribute("aria-expanded", "true");
            faqIcon.textContent = "−";
        }

    });

});