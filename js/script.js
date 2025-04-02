// Smooth scrolling for nav links and CTA buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close the menu on mobile after clicking a link
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    console.log('Form Submitted:', data);
    alert('Message sent successfully! (Demo)');
    contactForm.reset();
  });
}

// Typewriter Effect for Hero Title
const typewriterElement = document.querySelector('.typewriter');
const text = typewriterElement.textContent;
typewriterElement.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typewriterElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    typewriterElement.style.borderRight = 'none';
  }
}

window.addEventListener('load', typeWriter);

// ScrollReveal Animations
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200,
  scale: 0.9,
  reset: true
});

// Hamburger Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});