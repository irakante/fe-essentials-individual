// ініціалізація бургеру
function initBurger() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("mobile-menu--open");
  });
}

// Викликати ініціалізацію після підвантаження partial через HTMX
document.addEventListener("htmx:afterSwap", () => {
  initBurger();
});

// Викликати при звичайному завантаженні (коли header в HTML без HTMX)
document.addEventListener("DOMContentLoaded", () => {
  initBurger();
});