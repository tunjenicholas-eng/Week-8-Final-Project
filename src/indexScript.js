// Portfolio data
const portfolioItems = [
    {
        id: 1,
        title: "Sunset Wedding",
        category: "wedding",
        description: "Beautiful outdoor wedding ceremony at golden hour",
        image: "./public/images/sunset-w.jpg"
    },
    {
        id: 2,
        title: "Family Portraits",
        category: "portrait",
        description: "Natural light family session in the park",
        image: "./public/images/family.jpg"
    },
    {
        id: 3,
        title: "Urban Commercial",
        category: "commercial",
        description: "Architectural photography for real estate brand",
        image: "./public/images/urban.jpg"
    },
    {
        id: 4,
        title: "Mountain Landscape",
        category: "landscape",
        description: "Breathtaking mountain vista at sunrise",
        image: "./public/images/mountain.jpg"
    },
    {
        id: 5,
        title: "Intimate Ceremony",
        category: "wedding",
        description: "Small wedding with close family and friends",
        image: "./public/images/intimate.jpg"
    },
    {
        id: 6,
        title: "Professional Headshots",
        category: "portrait",
        description: "Corporate headshots for business professionals",
        image: "./public/images/professional.jpg"
    },
    {
        id: 7,
        title: "Product Photography",
        category: "commercial",
        description: "Lifestyle product shots for e-commerce",
        image: "./public/images/product.jpg"
    },
    {
        id: 8,
        title: "Coastal Scenery",
        category: "landscape",
        description: "Dramatic coastal landscape with crashing waves",
        image: "./public/images/coastal.jpg"
    },
    {
        id: 9,
        title: "Elegant Reception",
        category: "wedding",
        description: "Luxurious wedding reception in a ballroom",
        image: "./public/images/elegant.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initPortfolio();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize testimonials slider
    initTestimonials();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize lightbox
    initLightbox();
});

// Portfolio Functions
function initPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Generate portfolio items
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.setAttribute('data-id', item.id);

        // Use actual image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay';
        overlay.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        portfolioItem.appendChild(img);
        portfolioItem.appendChild(overlay);
        portfolioGrid.appendChild(portfolioItem);

        // Add click event for lightbox
        portfolioItem.addEventListener('click', () => openLightbox(item));
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const items = document.querySelectorAll('.portfolio-item');
            
            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Navigation Functions
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// Testimonials Functions
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(n) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + testimonials.length) % testimonials.length;
        
        testimonials[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Contact Form Functions
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Reset form
        form.reset();
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Lightbox Functions
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');
    
    let currentItem = 0;
    
    // Open lightbox
    window.openLightbox = function(item) {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.image;
        lightboxTitle.innerText = item.title;
        lightboxDesc.innerText = item.description;
        
        currentItem = item.id - 1;
    }
    
    // Close lightbox
    if (closeLightbox) {
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }
    
    // Navigate in lightbox
    function navigateLightbox(direction) {
        currentItem = (currentItem + direction + portfolioItems.length) % portfolioItems.length;
        const item = portfolioItems[currentItem];
        
        lightboxImg.src = item.image;
        lightboxTitle.innerText = item.title;
        lightboxDesc.innerText = item.description;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            navigateLightbox(-1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            navigateLightbox(1);
        });
    }
}

// Generate random gradient (for demo purposes)
function getRandomGradient() {
    const colors = ['#f5f7fa', '#c3cfe2', '#d1e8e2', '#f9e79f', '#f5b7b1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomColor} 0%, #fff 100%)`;
}
