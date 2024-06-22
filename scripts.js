// Возможно, вам потребуется JavaScript для управления активным слайдом
const slider = document.querySelector('.slider');
let isScrolling;

slider.addEventListener('scroll', function () {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        // Логика для определения активного слайда
        let activeSlideIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        setActiveSlide(activeSlideIndex);
    }, 250);
});

function setActiveSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
