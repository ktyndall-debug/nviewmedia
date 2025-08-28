// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*=${sectionId}]`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Contact form functionality
const contactForm = document.getElementById('contactForm');

// Option 1: If using Web3Forms with standard submission (recommended for simplicity)
// The form will submit normally and redirect to success page

// Option 2: If you want AJAX submission (stays on same page)
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        // Check if access key is set
        const accessKey = contactForm.querySelector('input[name="access_key"]').value;
        
        if (accessKey === 'YOUR-ACCESS-KEY-HERE') {
            // If access key not set, use mailto fallback
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Create mailto link as fallback
            const subject = `New Contact Form Submission - ${service}`;
            const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:info@nviewmedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            window.location.href = mailtoLink;
            alert('Please complete sending the email in your email client.');
            contactForm.reset();
            
        } else {
            // If you want AJAX submission instead of page redirect, uncomment below:
            /*
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');
            const formData = new FormData(contactForm);
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Show success message
                    formMessage.style.display = 'block';
                    formMessage.style.background = '#28a745';
                    formMessage.textContent = 'Thank you! We\'ll be in touch soon.';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Show error message
                formMessage.style.display = 'block';
                formMessage.style.background = '#dc3545';
                formMessage.textContent = 'Something went wrong. Please try again.';
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
            */
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Stats counter animation
const counters = document.querySelectorAll('.counter');

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for stats animation
const statsSection = document.querySelector('.about-stats-container');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Image lazy loading for portfolio items
const images = document.querySelectorAll('.image-placeholder');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            imageObserver.unobserve(entry.target);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Smooth reveal animation for cards
const cards = document.querySelectorAll('.service-card, .portfolio-item');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
    cardObserver.observe(card);
});

// Enhanced form interactions
const formInputs = document.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
    
    input.addEventListener('input', () => {
        if (input.value !== '') {
            input.parentElement.classList.add('filled');
        } else {
            input.parentElement.classList.remove('filled');
        }
    });
});

// Add click ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    pointer-events: none;
    transform: scale(0);
    animation: ripple 0.6s linear;
}

@keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Add the CSS to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleCSS;
document.head.appendChild(styleSheet);

// Error handling for missing elements
const handleMissingElements = () => {
    const requiredElements = [
        { selector: '#navbar', name: 'Navigation' },
        { selector: '.hero', name: 'Hero section' },
        { selector: '.services', name: 'Services section' },
        { selector: '.contact', name: 'Contact section' }
    ];
    
    requiredElements.forEach(element => {
        if (!document.querySelector(element.selector)) {
            console.warn(`${element.name} not found. Some functionality may not work.`);
        }
    });
};

// Initialize error handling
handleMissingElements();

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    setActiveNav();
    
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Video Modal functionality
const videoModal = document.getElementById('videoModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalIframe = document.getElementById('modalIframe');
const closeModalBtn = document.getElementById('closeModal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const expandButtons = document.querySelectorAll('.expand-video');

// Open video modal
expandButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const videoId = button.getAttribute('data-video-id');
        const title = button.getAttribute('data-title');
        const category = button.getAttribute('data-category');
        
        // Update modal content
        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalIframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&byline=0&title=0&portrait=0&controls=1`;
        
        // Show modal
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal functions
function closeModal() {
    videoModal.classList.remove('active');
    modalIframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto';
}

// Close modal event listeners
closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
    }
});

console.log('NView Media website loaded successfully! 🎥');