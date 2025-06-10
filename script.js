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