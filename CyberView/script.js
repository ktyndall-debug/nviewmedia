// Cyberpunk NView Media Script

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Number counter animation
const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-value'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                num.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                num.textContent = target;
            }
        };
        
        // Start animation when element is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(num);
    });
};

animateNumbers();

// Portfolio filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Video Modal
const modal = document.getElementById('videoModal');
const modalIframe = document.getElementById('modalIframe');
const closeModal = document.getElementById('closeModal');
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video');
        const videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
        modalIframe.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        modal.classList.remove('active');
        modalIframe.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form will submit normally to Web3Forms
        // Add loading state to button
        const submitBtn = this.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
        }
    });
}

// Glitch effect on hover for certain elements
const glitchElements = document.querySelectorAll('.glitch-text');

glitchElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'glitch-1 0.3s infinite';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.animation = 'none';
    });
});

// Typing effect for hero description
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let index = 0;
    
    const typeWriter = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing when page loads
    setTimeout(typeWriter, 500);
}

// Add cyber rain effect
const createRainDrop = () => {
    const rain = document.querySelector('.cyber-rain');
    if (!rain) return;
    
    const drop = document.createElement('div');
    drop.style.position = 'absolute';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.top = '-10px';
    drop.style.width = '2px';
    drop.style.height = '10px';
    drop.style.background = 'linear-gradient(180deg, transparent, var(--cyber-blue))';
    drop.style.animation = 'fall 3s linear';
    
    rain.appendChild(drop);
    
    setTimeout(() => {
        drop.remove();
    }, 3000);
};

// Create rain drops periodically
setInterval(createRainDrop, 200);

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply scroll animations to elements
document.querySelectorAll('.feature-card, .service-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    animateOnScroll.observe(el);
});

// Terminal typing animation
const terminalLines = document.querySelectorAll('.terminal-line');
let lineIndex = 0;

const showTerminalLine = () => {
    if (lineIndex < terminalLines.length) {
        terminalLines[lineIndex].style.opacity = '1';
        terminalLines[lineIndex].style.animation = 'typingEffect 1s steps(40, end)';
        lineIndex++;
        setTimeout(showTerminalLine, 800);
    }
};

// Start terminal animation when in view
const terminalWindow = document.querySelector('.terminal-window');
if (terminalWindow) {
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                terminalLines.forEach(line => {
                    line.style.opacity = '0';
                });
                lineIndex = 0;
                setTimeout(showTerminalLine, 500);
                terminalObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    terminalObserver.observe(terminalWindow);
}

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add hover effects to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.opacity = '1';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
    });
});

// Parallax effect for hero section
const heroSection = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

if (heroSection && heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Add custom cursor effect (optional)
const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--cyber-blue);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });
};

// Enable custom cursor on desktop only
if (window.innerWidth > 768) {
    // Uncomment to enable custom cursor
    // createCursor();
}

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Initialize all animations
    animateNumbers();
    
    // Remove preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1000);
    }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any necessary values
        if (window.innerWidth <= 768) {
            // Mobile adjustments
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }, 250);
});

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modalIframe.src = '';
        document.body.style.overflow = 'auto';
    }
});

// Add loading state for images and videos
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('load', () => {
        iframe.style.opacity = '1';
    });
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states
    document.body.classList.add('loaded');
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable animations for accessibility
        document.querySelectorAll('*').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }
    
    console.log('%c NVIEW MEDIA SYSTEMS ONLINE ', 
                'background: linear-gradient(90deg, #00D9FF, #9D00FF); color: white; font-weight: bold; font-size: 20px; padding: 10px;');
    console.log('%c Welcome to the Matrix ', 
                'color: #00D9FF; font-family: monospace; font-size: 14px;');
});
