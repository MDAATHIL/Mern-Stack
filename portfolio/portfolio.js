// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic greeting message in the "Home" section
const hours = new Date().getHours();
const greetingMessage = document.querySelector('#home p');
if (hours < 12) {
    greetingMessage.textContent = 'Good Morning! I\'m Mohamed Aathil, an ECE graduate passionate about Cybersecurity and innovation.';
} else if (hours < 18) {
    greetingMessage.textContent = 'Good Afternoon! I\'m Mohamed Aathil, an ECE graduate passionate about Cybersecurity and innovation.';
} else {
    greetingMessage.textContent = 'Good Evening! I\'m Mohamed Aathil, an ECE graduate passionate about Cybersecurity and innovation.';
}
