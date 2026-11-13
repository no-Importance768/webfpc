const heading = document.getElementById('heading');
const button = document.getElementById('click-button');
const hint = document.getElementById('button-hint');

button.addEventListener('click', () => {
  heading.textContent = 'It works!';
  hint.textContent = 'Your first interaction. Nicely done.';
});
