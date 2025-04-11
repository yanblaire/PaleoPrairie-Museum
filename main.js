// Navigation Bar Scrool Animation
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var opacity = 1 - (window.scrollY / 150);
    opacity = Math.max(0, opacity);

    if(this.window.screenY > 500){
        opacity = 0;
        header.style.zIndex = 50;
    }else{
        header.classList.toggle('sticky', window.scrollY > 0);
        header.style.zIndex = 30;
    }

    header.style.opacity = opacity;
});

// Hero Section Images Slideshow Animation
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        console.log('Found ' + slides.length + ' hero slides');
        
        
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
       
        slides[0].classList.add('active');
        
        let currentSlide = 0;
        
        
        function nextSlide() {
          
            slides[currentSlide].classList.remove('active');
            
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            
            slides[currentSlide].classList.add('active');
        }
        
       
        setInterval(nextSlide, 5000);
    } else {
        console.error('No hero slides found!');
    }
})