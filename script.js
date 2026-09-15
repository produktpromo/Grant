const submitBtn = document.getElementById('submitBtn'); const processing = document.getElementById('processing'); const progress = document.getElementById('progress'); const timer = document.getElementById('timer');
submitBtn.addEventListener('click', () => { submitBtn.style.display = 'none'; processing.hidden = false;
const duration = 75000; // 75 секунд const start = Date.now();
const interval = setInterval(() => { const elapsed = Date.now() - start; const percent = Math.min((elapsed / duration) * 100, 100);
progress.style.width = percent + '%';

const remaining = Math.max(
  0,
  Math.ceil((duration - elapsed) / 1000)
);

const minutes = Math.floor(remaining / 60);
const seconds = String(remaining % 60).padStart(2, '0');

timer.textContent =
  `Ориентировочное время рассмотрения: ${minutes}:${seconds}`;

if (elapsed >= duration) {
  clearInterval(interval);
  window.location.href = 'result.html';
}
}, 250); });
