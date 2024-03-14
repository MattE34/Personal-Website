let resume = document.getElementById("resumeFile");

resume.addEventListener("click", function () {
  window.open("media/Resume.pdf", "_blank");
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

ScrollReveal({
  reset: true,
  // setting distance >= '120px' causes a horizontal bar at the bottom of the page to appear
  distance: "100px",
  duration: 1500,
  delay: 100,
  opacity: 0,
});

ScrollReveal().reveal(
  ".home-content h1, .about-content h2, .skills-content h2, .techs, .projects-content h2",
  { origin: "top" }
);
ScrollReveal().reveal(".home-content p, .self-image", { origin: "left" });
ScrollReveal().reveal(".socials, .activities, .bio", { origin: "right" });
ScrollReveal().reveal(".whoButton, .description, .products", {
  origin: "bottom",
});
