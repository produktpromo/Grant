document.getElementById('grantForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const button = this.querySelector('button[type="submit"]');
  button.disabled = true;
  button.innerHTML = 'Заявка обрабатывается… <span>⏳</span>';

  const number = 'DEMO-' + Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem('demoApplicationNumber', number);

  // Демонстрационная задержка перед переходом на страницу результата.
  setTimeout(() => {
    window.location.href = 'result.html';
  }, 10000);
});
