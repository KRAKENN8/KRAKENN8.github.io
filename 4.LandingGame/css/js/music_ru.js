document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.accordion__button');
    const content = document.querySelector('.accordion__content');

    button.addEventListener('click', () => {
        content.classList.toggle('open');
        button.textContent = content.classList.contains('open') 
            ? 'Скрыть композиции' 
            : 'Показать композиции';
    });
});