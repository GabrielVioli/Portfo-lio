// script.js

// Menu hambúrguer toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const isHidden = navMenu.hasAttribute("hidden");
  if (isHidden) {
    navMenu.removeAttribute("hidden");
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    navMenu.setAttribute("hidden", "");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Fecha o menu ao clicar em um item (responsivo para mobile)
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.setAttribute("hidden", "");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Dark mode toggle
const darkToggle = document.getElementById("dark-mode-toggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Validação simples do formulário
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Por favor, preencha todos os campos.";
    formMessage.style.color = "#d9534f"; // vermelho
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "Por favor, insira um email válido.";
    formMessage.style.color = "#d9534f";
    return;
  }

  // Aqui você pode integrar com backend, API ou serviço de envio de email
  formMessage.textContent = "Mensagem enviada com sucesso! Obrigado!";
  formMessage.style.color = "#28a745"; // verde
  form.reset();
});
