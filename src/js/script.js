document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle Button
  const toggleBtn = document.querySelector("#button-switch");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // Burger Menus
  const burger = document.querySelectorAll("#navbar-burger");
  const menu = document.querySelectorAll("#navbar-menu");
  const close = document.querySelectorAll("#navbar-close");
  const backdrop = document.querySelectorAll("#navbar-backdrop");

  const toggleMenu = () => {
    menu.forEach((el) => el.classList.toggle("hidden"));
  };

  burger.forEach((el) => el.addEventListener("click", toggleMenu));
  close.forEach((el) => el.addEventListener("click", toggleMenu));
  backdrop.forEach((el) => el.addEventListener("click", toggleMenu));
});
