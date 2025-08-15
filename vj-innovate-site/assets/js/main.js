// Main JavaScript file for VJ Innovate Software Solutions website
document.addEventListener('DOMContentLoaded', function() {
    
    // Load contact information from config
    loadContactInfo();
    
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.course-card, .service-card, .benefit-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Form validation and submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    
                    // Remove error styling on input
                    field.addEventListener('input', function() {
                        this.classList.remove('border-red-500');
                    });
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            // Email validation
            const emailFields = this.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    alert('Please enter a valid email address');
                }
            });
            
            // Phone validation
            const phoneFields = this.querySelectorAll('input[type="tel"]');
            phoneFields.forEach(field => {
                if (field.value) {
                    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
                    if (!phoneRegex.test(field.value)) {
                        isValid = false;
                        field.classList.add('border-red-500');
                        alert('Please enter a valid phone number');
                    }
                }
            });
            
            if (isValid) {
                // Show success message instead of submitting
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                form.reset();
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-lg');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-white', 'shadow-lg');
                navbar.classList.add('bg-transparent');
            }
        });
    }
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navigationLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navigationLinks.forEach(link => {
            link.classList.remove('text-secondary');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('text-secondary');
            }
        });
    });
    
    // Loading animation for buttons
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.disabled) return;
            
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
    
    // Course enrollment tracking
    const enrollButtons = document.querySelectorAll('button');
    enrollButtons.forEach(button => {
        if (button.textContent.includes('Enroll Now')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const courseName = this.closest('.course-card, .course-detail').querySelector('h3, h2').textContent;
                console.log(`Enrollment interest: ${courseName}`);
                
                // Show enrollment modal or redirect to contact page
                if (confirm(`Are you interested in enrolling for ${courseName}? Click OK to go to the contact page.`)) {
                    window.location.href = 'contact.html';
                }
            });
        }
    });
    
    // Parallax effect for hero sections
    const heroSections = document.querySelectorAll('.bg-gradient-to-br');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        heroSections.forEach(hero => {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    });
    
    // Statistics counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };
        
        const counterObserver = new IntersectionObserver(function(entries) {
            if (entries[0].isIntersecting) {
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
        
        counterObserver.observe(counter);
    });
    
    // Search functionality (if needed in future)
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.searchable');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-800 text-white p-2 rounded shadow-lg text-sm z-50';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - 40) + 'px';
            
            this.addEventListener('mouseleave', function() {
                tooltip.remove();
            });
        });
    });
});

// Utility functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Function to load contact information from config
function loadContactInfo() {
    if (typeof COMPANY_CONFIG === 'undefined') {
        console.warn('Company config not loaded. Make sure config.js is included before main.js');
        return;
    }
    
    // Update address information
    const addressElements = document.querySelectorAll('[data-contact="address"]');
    addressElements.forEach(element => {
        element.innerHTML = COMPANY_CONFIG.address.full;
    });
    
    // Update phone numbers
    const phoneElements = document.querySelectorAll('[data-contact="phone"]');
    phoneElements.forEach(element => {
        element.innerHTML = COMPANY_CONFIG.phones.join('<br>');
    });
    
    // Update phone links
    const phoneLinks = document.querySelectorAll('[data-contact="phone-link"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${COMPANY_CONFIG.phones[0]}`;
    });
    
    // Update email addresses
    const emailElements = document.querySelectorAll('[data-contact="email"]');
    emailElements.forEach(element => {
        element.innerHTML = `${COMPANY_CONFIG.emails.main}<br>${COMPANY_CONFIG.emails.courses}<br>${COMPANY_CONFIG.emails.internship}`;
    });
    
    // Update individual email links
    const mainEmailLinks = document.querySelectorAll('[data-contact="email-main"]');
    mainEmailLinks.forEach(link => {
        link.href = `mailto:${COMPANY_CONFIG.emails.main}`;
    });
    
    // Update business hours
    const businessHoursElements = document.querySelectorAll('[data-contact="business-hours"]');
    businessHoursElements.forEach(element => {
        element.innerHTML = `${COMPANY_CONFIG.businessHours.weekdays}<br>${COMPANY_CONFIG.businessHours.saturday}<br>${COMPANY_CONFIG.businessHours.sunday}`;
    });
    
    // Update social media links
    const socialLinks = document.querySelectorAll('[data-social]');
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-social');
        if (COMPANY_CONFIG.social[platform]) {
            link.href = COMPANY_CONFIG.social[platform];
        }
    });
    
    // Update Google Maps iframe
    const mapIframes = document.querySelectorAll('[data-contact="map"]');
    mapIframes.forEach(iframe => {
        iframe.src = COMPANY_CONFIG.googleMaps.embedUrl;
    });
    
    // Update company name and tagline
    const companyNameElements = document.querySelectorAll('[data-company="name"]');
    companyNameElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.name;
    });
    
    const taglineElements = document.querySelectorAll('[data-company="tagline"]');
    taglineElements.forEach(element => {
        element.textContent = COMPANY_CONFIG.tagline;
    });
}

// Export functions for global use
window.VJInnovate = {
    showNotification,
    formatPhoneNumber,
    loadContactInfo
};
