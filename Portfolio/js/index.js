document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const hamburger = document.querySelector(".hamburger");
  const hamburgerLines = document.querySelector(".hamburger-lines");
  const hamburgerItems = document.querySelector(".hamburger-items");
  const hamburgerLinks = document.querySelectorAll(
    ".hamburger-items > ul > li > a"
  );

  const navLinks = document.querySelectorAll("#header-menu > li > a");

  hamburger.addEventListener("click", () => {
    hamburgerLines.classList.toggle("active");
    hamburgerItems.classList.toggle("active");
    body.classList.toggle("lock");
  });

  hamburgerLinks.forEach((a) => {
    a.addEventListener("click", (event) => {
      event.preventDefault();
      hamburgerLines.classList.toggle("active");
      hamburgerItems.classList.toggle("active");
      body.classList.toggle("lock");

      let id = a.getAttribute("href");
      let targetElement = document.querySelector(id);
      if (targetElement) {
        let top = targetElement.offsetTop;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      } else {
        return;
      }
    });
  });

  navLinks.forEach((a) => {
    a.addEventListener("click", (event) => {
      event.preventDefault();

      let id = a.getAttribute("href");
      let targetElement = document.querySelector(id);
      if (targetElement) {
        let top = targetElement.offsetTop;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      } else {
        return;
      }
    });
  });
});
