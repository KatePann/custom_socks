const changeColorButton = document.querySelector('.change-color');
const colorInput = document.getElementById('color');
const box = document.querySelector('.socks');

changeColorButton.addEventListener('click', () => {
  const color = colorInput.value;
  box.style.backgroundColor = color;
});
