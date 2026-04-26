// JavaScript for Dalton Bakes interactivity

document.addEventListener("DOMContentLoaded", () => {
  // Scroll handling for header
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("shadow-xl", "py-2");
      header.classList.remove("py-4");
    } else {
      header.classList.remove("shadow-xl", "py-2");
      header.classList.add("py-4");
    }
  });

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll("section > div");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  revealElements.forEach((el) => {
    // Prepare elements for animation
    if (el.parentElement.id !== "home") {
      // Skip hero as it has its own entry animation
      el.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-10",
      );
      revealObserver.observe(el);
    }
  });

  // Simple smooth scroll fallback for safari (already handled by CSS scroll-behavior)
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  }
});
