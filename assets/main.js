document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Typing Animation
  const typingElement = document.getElementById("typingName");
  const fullName = typingElement.textContent;
  typingElement.textContent = "";

  let i = 0;
  function typeWriter() {
    if (i < fullName.length) {
      typingElement.textContent += fullName.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
      backToTopBtn.classList.add("opacity-100", "visible");
    } else {
      backToTopBtn.classList.add("opacity-0", "invisible");
      backToTopBtn.classList.remove("opacity-100", "visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Animate skill items
  const skillItems = document.querySelectorAll("#skillsList > div");
  skillItems.forEach((item, idx) => {
    setTimeout(() => {
      item.classList.remove("opacity-0", "translate-y-2");
      item.classList.add("opacity-100", "translate-y-0");
    }, 300 * idx);
  });

  // Set location text
  const projectText = document.getElementById("projectText");
  if (projectText) {
    projectText.innerHTML =
      '<i class="ri-map-pin-line mr-1"></i>Bangalore, India';
  }
});
// (No script was present in the provided index.html excerpt, so no script to move. If you have inline JS for the terminal or hero section, please provide it or clarify.)
