document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-element');

  const appearOnScroll = () => {
    const windowBottom = window.innerHeight;

    faders.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowBottom - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll(); // Sayfa yüklendiğinde kontrol et
});
