// Main JavaScript functionality for the wellness tourism website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileNavigation();
    initThemeToggle();
    initLanguageToggle();
    initTestimonialsSlider();
    initFormHandling();
    initScrollAnimations();
    initImageModal();
    initVideoModal();
});

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}

// Language Toggle
function initLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    let currentLanguage = localStorage.getItem('language') || 'EN';

    if (langToggle) {
        langToggle.textContent = currentLanguage;
        updateLanguage(currentLanguage);

        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'EN' ? 'DE' : 'EN';
            langToggle.textContent = currentLanguage;
            localStorage.setItem('language', currentLanguage);
            updateLanguage(currentLanguage);
        });
    }

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-en][data-de]');
        elements.forEach(element => {
            const text = lang === 'EN' ? element.getAttribute('data-en') : element.getAttribute('data-de');
            if (text) {
                element.textContent = text;
            }
        });
    }
}

// Testimonials Slider
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    if (testimonials.length > 0 && dots.length > 0) {
        // Auto-advance slides
        setInterval(function() {
            showTestimonial((currentSlide + 1) % testimonials.length);
        }, 5000);
    }
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length === 0 || dots.length === 0) return;

    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show selected testimonial and dot
    if (testimonials[index] && dots[index]) {
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }
}

// Form Handling
function initFormHandling() {
    const tripForm = document.getElementById('trip-form');

    if (tripForm) {
        tripForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(tripForm);
            const data = {};
            
            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    // Handle multiple values (like checkboxes)
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }

            // Show success message
            showNotification('Thank you! Your trip request has been submitted. We will contact you soon with a personalized itinerary.', 'success');
            
            // Reset form
            tripForm.reset();
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .seasonal-card, .activity-card, .spa-card, .attraction-card, .testimonial-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Enhanced Image Modal with Video Support
function initImageModal() {
    const images = document.querySelectorAll('img[src*="images/"], img[onclick*="openImageModal"]');
    
    images.forEach(image => {
        if (!image.onclick) {
            image.addEventListener('click', function() {
                openImageModal(this.src, this.alt);
            });
        }
        
        // Add cursor pointer to indicate clickable
        image.style.cursor = 'pointer';
    });
}

function openImageModal(src, alt) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;

    // Create image element
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        cursor: default;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    `;

    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
    });

    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);

    // Prevent image click from closing modal
    img.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close modal on click outside image or on close button
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            closeImageModal(modal);
        }
    });

    // Close modal on escape key
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            closeImageModal(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeImageModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
        document.body.style.overflow = '';
    }, 300);
}

// Video Modal Functionality
function initVideoModal() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail, .video-thumbnail-small, .video-thumbnail-tiny');
    
    videoThumbnails.forEach(thumbnail => {
        thumbnail.style.cursor = 'pointer';
    });
}

function openVideoModal(videoSrc) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;

    // Create video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
        cursor: default;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    `;

    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
    });

    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    modal.appendChild(video);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);

    // Prevent video click from closing modal
    video.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Close modal on click outside video or on close button
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            closeVideoModal(modal);
        }
    });

    // Close modal on escape key
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            closeVideoModal(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(modal) {
    const video = modal.querySelector('video');
    if (video) {
        video.pause();
    }
    
    modal.style.opacity = '0';
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
        document.body.style.overflow = '';
    }, 300);
}
