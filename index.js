// FoodYard Garden Restaurant
// Smooth navigation + small scroll interaction

document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.style.background = "rgba(9, 10, 9, 0.96)";
    } else {
      navbar.style.background = "rgba(13, 14, 13, 0.82)";
    }
  });


  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

});