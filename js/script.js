// Carousel functionality
let currentSlide = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!items.length) return;
    
    items[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= items.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = items.length - 1;
    }
    
    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!items.length) return;
    
    items[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    items[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Auto-advance carousel (optional)
// setInterval(() => moveCarousel(1), 5000);

console.log('Portfolio website loaded successfully!');