let resume = document.getElementById('resumeFile');

resume.addEventListener("click", function() {
    window.open("media/Resume.pdf", "_blank")
})

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });