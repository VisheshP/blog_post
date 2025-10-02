// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  btn?.addEventListener("click", () => menu.classList.toggle("hidden"));

  // Theme toggle
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const toggleMobile = document.getElementById("theme-toggle-mobile");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  const setTheme = (dark) => {
    if (dark) {
      root.classList.add("dark");
      iconSun?.classList.remove("hidden");
      iconMoon?.classList.add("hidden");
      document.cookie = "theme=dark;path=/";
    } else {
      root.classList.remove("dark");
      iconSun?.classList.add("hidden");
      iconMoon?.classList.remove("hidden");
      document.cookie = "theme=light;path=/";
    }
  };

  // Initialize theme
  setTheme(
    root.classList.contains("dark") || document.cookie.includes("theme=dark")
  );

  // Toggle event
  const toggleTheme = () => setTheme(!root.classList.contains("dark"));
  toggle?.addEventListener("click", toggleTheme);
  toggleMobile?.addEventListener("click", toggleTheme);
});
