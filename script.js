
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
  menuToggle.setAttribute("aria-expanded", !expanded);
  if (navMenu.hasAttribute("hidden")) {
    navMenu.removeAttribute("hidden");
  } else {
    navMenu.setAttribute("hidden", "");
  }
});

// Dark mode toggle
const darkToggle = document.getElementById("dark-mode-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "Por favor, insira um email válido.";
    return;
  }

  formMessage.textContent = "Mensagem enviada com sucesso! Obrigado!";
  form.reset();
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
