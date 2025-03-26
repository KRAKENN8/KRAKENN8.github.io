// Находим нужные элементы
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0; // Индекс текущего слайда

// Функция показа слайда по индексу
function showSlide(index) {
  // Прячем все слайды и снимаем "active" с точек
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  // Показываем нужный слайд и активируем соответствующую точку
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Функция переключения на следующий слайд
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Обработка клика на стрелку "вперёд"
nextBtn.addEventListener('click', nextSlide);

// Обработка клика на точку (индикатор)
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
    currentSlide = slideIndex;
    showSlide(currentSlide);
  });
});
