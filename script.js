// Animasi muncul saat scroll
const cards = document.querySelectorAll(".card, .overview, .profile");

window.addEventListener("scroll", () => {
  cards.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

