document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mode-toggle");
  const body = document.body;

  // Default to light mode
  body.classList.add("light-mode");

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️";
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      toggleButton.textContent = "🌙";
    }
  });
});




/*----top down menu -------*/

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Optional: Auto set theme based on system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.add(prefersDark ? "dark-mode" : "light-mode");
