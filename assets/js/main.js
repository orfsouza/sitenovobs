/* BORSUL — main.js — vanilla JS, sem dependências */
(function () {
  "use strict";

  /* Header: encolhe ao rolar */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
    lastY = window.scrollY;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  var toggle = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Fade-up ao entrar na viewport */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Formulário de contato — validação e envio via e-mail (aguardando integração com backend/serviço de formulários) */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var feedback = form.querySelector(".form-feedback");
      var required = form.querySelectorAll("[required]");
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      if (!valid) {
        if (feedback) {
          feedback.textContent = "Preencha os campos obrigatórios antes de enviar.";
          feedback.hidden = false;
        }
        return;
      }

      var data = {
        nome: form.querySelector("#f-nome") ? form.querySelector("#f-nome").value : "",
        empresa: form.querySelector("#f-empresa") ? form.querySelector("#f-empresa").value : "",
        email: form.querySelector("#f-email") ? form.querySelector("#f-email").value : "",
        telefone: form.querySelector("#f-telefone") ? form.querySelector("#f-telefone").value : "",
        material: form.querySelector("#f-material") ? form.querySelector("#f-material").value : "",
        mensagem: form.querySelector("#f-mensagem") ? form.querySelector("#f-mensagem").value : ""
      };

      var subject = encodeURIComponent("Solicitação de orçamento — " + (data.empresa || data.nome));
      var body = encodeURIComponent(
        "Nome: " + data.nome + "\n" +
        "Empresa: " + data.empresa + "\n" +
        "E-mail: " + data.email + "\n" +
        "Telefone: " + data.telefone + "\n" +
        "Material / assunto: " + data.material + "\n\n" +
        "Mensagem:\n" + data.mensagem
      );
      window.location.href = "mailto:borsul@borsul.com.br?subject=" + subject + "&body=" + body;

      if (feedback) {
        feedback.textContent =
          "Obrigado, " + (data.nome || "") + ". Abrimos seu aplicativo de e-mail com a mensagem pronta para envio — se preferir, fale com a gente pelo telefone ou WhatsApp ao lado.";
        feedback.hidden = false;
      }
      form.reset();
    });
  }
})();
