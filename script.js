<script>
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("modeToggle");
  const body = document.body;

  body.classList.add("light-mode");

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});
</script>