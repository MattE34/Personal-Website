let resume = document.getElementById("resumeFile");

resume.addEventListener("click", function () {
  window.open("media/Matthew_Eng_Resume.pdf", "_blank");
});

let resume2 = document.getElementById("resumeFile2");

resume2.addEventListener("click", function () {
  window.open("media/Matthew_Eng_Resume (Data).pdf", "_blank");
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Logic to add underline selectors to navlist buttons
const navLinks = document.querySelectorAll(".navlist li a");

// navLinks.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     navLinks.forEach((b) => b.classList.remove("active"));

//     btn.classList.add("active");
//   });
// });



// Logic to add underline selectors to when section is visible

const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2 // Section must be 50% visible to trigger
};

// Create the Intersection Observer callback
function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(`.navlist li a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

// Create the observer
const observer = new IntersectionObserver(handleIntersect, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});


// ScrollReveal
ScrollReveal({
  reset: true,
  // setting distance >= '120px' causes a horizontal bar at the bottom of the page to appear
  distance: "30px",
  duration: 1250,
  delay: 25,
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
