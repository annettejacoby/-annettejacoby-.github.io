/ Function to display images in modal
function openModalImage(src) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;

    const img = new Image();
    img.src = src;
    img.onload = function() {
        if (img.width > img.height) {
            document.querySelector('.modal-dialog').classList.add('modal-lg');
        } else {
            document.querySelector('.modal-dialog').classList.remove('modal-lg');
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
        disable: 'mobile'
    });

    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
            if (scrollTop > lastScrollTop) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Smooth scroll for navigation links (do not apply to mailto: or external links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Check clicks on Email and LinkedIn links
    document.querySelector('.btn-primary').addEventListener('click', () => {
        console.log("Email button clicked");
    });

    const linkedinLink = document.querySelector('.fab.fa-linkedin');
    linkedinLink.parentNode.addEventListener('click', () => {
        console.log("LinkedIn link clicked");
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.transitionDelay = ${index * 0.1}s;
    });
});
