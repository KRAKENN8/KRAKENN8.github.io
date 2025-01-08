document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("testimonialsSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    // Все элементы с отзывами
    const slides = slider.querySelectorAll(".testimonials__item");
    
    let currentIndex = 0; // Индекс текущего отзыва
  
    // Функция, которая обновляет позицию слайдера
    function updateSlider() {
      // Расстояние, на которое смещаем: индекс * ширина одного отзыва
      const offset = -currentIndex * 100; 
      slider.style.transform = `translateX(${offset}%)`;
    }
  
    // Обработчик кнопки "Вперёд"
    nextBtn.addEventListener("click", () => {
      // Если текущий слайд не последний, двигаемся вперёд
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
      } else {
        // Если дошли до последнего — можно вернуть на первый (опционально)
        // currentIndex = 0;
        // updateSlider();
      }
    });
  
    // Обработчик кнопки "Назад"
    prevBtn.addEventListener("click", () => {
      // Если текущий слайд не первый, двигаемся назад
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      } else {
        // Если дошли до первого — можно перейти к последнему (опционально)
        // currentIndex = slides.length - 1;
        // updateSlider();
      }
    });
  });
  