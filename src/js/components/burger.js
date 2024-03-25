document.addEventListener("DOMContentLoaded", function () {
  const mm = window.matchMedia("(max-width: 768px)");

  if (!document.querySelector(".hamburger")) return;
  const hamburger = document.querySelector(".hamburger");
  const burgerMenu = document.querySelector(".header__burger-menu");
  const hamburgerClose = document.querySelector(".header__burger-close");

  function closeBurgerMenu() {
    burgerMenu.classList.remove("active");
    document.documentElement.classList.remove("_lock");
  }

  function openBurgerMenu() {
    burgerMenu.classList.add("active");
    document.documentElement.classList.add("_lock");
  }

  hamburger.addEventListener("click", openBurgerMenu);

  hamburgerClose.addEventListener("click", closeBurgerMenu);

  mm.addEventListener("change", function () {
    if (!mm.matches) {
      closeBurgerMenu();
    }
  });
});
