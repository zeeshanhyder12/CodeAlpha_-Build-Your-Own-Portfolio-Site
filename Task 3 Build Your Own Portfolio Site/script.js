// Scroll reveal animation
document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
  document.querySelectorAll('section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
      sec.style.transition = "all 0.6s ease-out";
    }
  });
});
