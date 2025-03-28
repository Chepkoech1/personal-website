


document.addEventListener('DOMContentLoaded', function() {
    // Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
      });
    }
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
          });
  
          if (navMenu.classList.contains('show')) {
              navMenu.classList.remove('show');
          }
        }
      });
    });
  
   
    const newsletterForm = document.querySelector('.footer-newsletter');
  
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
  
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
  
       
        if (email && email.includes('@')) {
          alert('Thank you for subscribing!'); 
          emailInput.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
  
    
  });
