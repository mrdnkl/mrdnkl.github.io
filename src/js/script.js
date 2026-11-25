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
/*
  const clockEl = document.getElementById("githubUpdateTime");

function updateCurrentTime() {
  if (!clockEl) return;

  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockEl.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
*/
  // Time Now
  const clockEl = document.getElementById("githubUpdateTime");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateCurrentTime() {
  if (!clockEl) return;

  const now = new Date();
  const dayName = days[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clockEl.textContent = `${dayName}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);


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

  // Service Submenu Toggle
  const serviceBtn = document.querySelector("#service-dropdown-btn");
  const serviceSubmenu = document.querySelector("#service-submenu");
  const serviceChevron = document.querySelector("#service-chevron");

  if (serviceBtn && serviceSubmenu) {
    serviceBtn.addEventListener("click", () => {
      const isHidden = serviceSubmenu.classList.toggle("hidden");
      serviceBtn.setAttribute("aria-expanded", String(!isHidden));
      if (serviceChevron) {
        serviceChevron.classList.toggle("rotate-180");
      }
    });
  }
});
