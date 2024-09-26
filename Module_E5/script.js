const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
]; // массив изображений

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Функция для обновления изображения
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // переход к последнему изображению
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // переход к первому изображению
    updateImage();
});

// Инициализация слайдера
updateImage();