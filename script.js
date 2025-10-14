document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link has a hash and is not just a button
            if (this.hash !== "") {
                e.preventDefault();

                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add box-shadow to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

});