// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  
  // Toggle Dark Mode
  const modeSwitch = document.getElementById('dynamic-text');
  
  // modeSwitch.addEventListener('change', () => {
  //   document.body.classList.toggle('dark-mode');
    
  //   // Save mode to localStorage
  //   if (document.body.classList.contains('dark-mode')) {
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     localStorage.setItem('theme', 'light');
  //   }
  // });
  
  // // Load saved theme from localStorage (default to light mode)
  // window.onload = () => {
  //   const savedTheme = localStorage.getItem('theme') || 'light'; // Default to light mode
  //   if (savedTheme === 'dark') {
  //     document.body.classList.add('dark-mode');
  //     modeSwitch.checked = true;
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //     modeSwitch.checked = false;
  //   }
//};


// Typewriter Effect
const roles = ["Software Engineer.", "Full Stack Developer.", "Mathematics Enthusiast."];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById('dynamic-text');

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
  


// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});