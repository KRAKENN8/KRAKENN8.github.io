const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}

document.querySelector('.next-btn').addEventListener('click', () => {
  let nextIndex = (currentSlide + 1) % dots.length;
  goToSlide(nextIndex);
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const index = parseInt(e.target.dataset.slide);
    goToSlide(index);
  });
});
