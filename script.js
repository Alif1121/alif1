/*----- to gle menu -----*/



/*---- dark mood -------*/


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
