document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const modal = document.getElementById('modalBuy');
    const closeModal = document.querySelector('.modal-close');
    const buyForm = document.getElementById('buyForm');
  
    // Открытие модального окна при клике на любую кнопку "Buy"
    buyButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    });
  
    // Закрытие модального окна при клике на крестик
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Закрытие модального окна при клике вне его области
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Обработка отправки формы
    buyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      // Здесь можно добавить логику отправки данных на сервер
      alert("Данные отправлены!");
      modal.style.display = 'none';
    });
  });
  