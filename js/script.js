document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.display = "none";
  }, 3500); // بعد 3.5 ثوانٍ
});

