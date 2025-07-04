const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Aplica o tema salvo ao carregar
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  rootHtml.setAttribute("data-theme", savedTheme);

  // Ajusta o ícone do botão com ternário
  savedTheme === "dark"
    ? toggleTheme.classList.replace("bi-sun", "bi-moon-stars")
    : toggleTheme.classList.replace("bi-moon-stars", "bi-sun");
}

// Função para alternar o tema e salvar
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Alterna o ícone com ternário seguro
  toggleTheme.classList.contains("bi-sun")
    ? toggleTheme.classList.replace("bi-sun", "bi-moon-stars")
    : toggleTheme.classList.replace("bi-moon-stars", "bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

// Accordion com ternário
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.contains("active")
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

// Menu com classe ativa
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
