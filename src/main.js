import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.content-section, .timeline-item, .text-block p, blockquote');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      reveal.classList.add('reveal'); // Ensure class exists
      const elementTop = reveal.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  // Trigger once on load
  revealOnScroll();
});
