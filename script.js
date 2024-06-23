let slideIndex = 1;
showSlides(slideIndex);

// Функция для переключения слайдов вперед или назад
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Функция для переключения на конкретный слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Функция для отображения слайдов
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    // Обработка переполнения индекса слайдов
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Скрыть все слайды и удалить класс "active" у точек
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Показать текущий слайд и выделить соответствующую точку
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Добавляем обработчики для кнопок "prev" и "next" с использованием mousedown и touchend
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('mousedown', () => {
    plusSlides(-1);
});

nextButton.addEventListener('mousedown', () => {
    plusSlides(1);
});

// Добавляем обработчики для точек (индикаторов слайдов) с использованием mousedown и touchend
const dots = document.getElementsByClassName('dot');

Array.from(dots).forEach((dot, index) => {
    dot.addEventListener('mousedown', () => {
        currentSlide(index + 1);
    });
});

// Добавляем обработчики для событий touchend на мобильных устройствах
prevButton.addEventListener('touchend', (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию
    plusSlides(-1);
});

nextButton.addEventListener('touchend', (event) => {
    event.preventDefault(); // Предотвращаем действие по умолчанию
    plusSlides(1);
});

Array.from(dots).forEach((dot, index) => {
    dot.addEventListener('touchend', (event) => {
        event.preventDefault(); // Предотвращаем действие по умолчанию
        currentSlide(index + 1);
    });
});
