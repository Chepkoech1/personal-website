
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});


const nav = document.querySelector('nav ul');
const menuToggle = document.createElement('div');
menuToggle.innerHTML = '&#9776;'; 
menuToggle.style.cssText = 'cursor: pointer; font-size: 1.5rem; display: none; color: #007bff; padding: 10px;';
document.querySelector('nav').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
    }
});
