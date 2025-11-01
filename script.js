
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) header.classList.add('header-scrolled');
  else header.classList.remove('header-scrolled');
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

const contactModal = document.getElementById('contactModal');
const openContactModal = document.getElementById('openContactModal');
const closeContactModal = document.getElementById('closeContactModal');

openContactModal.addEventListener('click', () => contactModal.classList.add('active'));
closeContactModal.addEventListener('click', () => contactModal.classList.remove('active'));
contactModal.addEventListener('click', e => { if (e.target === contactModal) contactModal.classList.remove('active'); });

document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.section-title, .service-card, .mv-card');
  animatedElements.forEach(el => observer.observe(el));

  // Formulario principal
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const response = await fetch('https://formspree.io/f/myzbbvoo', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Hemos recibido tu propuesta. Te contactaremos dentro de las próximas 24 horas.'
      });
      form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.'
      });
    }
  });

  // Formulario rápido (modal)
  document.getElementById('quickContactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const response = await fetch('https://formspree.io/f/mvgvvyyg', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: '¡Perfecto!',
        text: 'Te enviaremos una cotización con el 15% de descuento en menos de 2 horas.'
      });
      form.reset();
      contactModal.classList.remove('active');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.'
      });
    }
  });
});