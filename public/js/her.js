const changeColorButton = document.querySelector('#change-color');
const colorInput = document.getElementById('color');
const box = document.querySelector('.socks');

const chPri = document.querySelector('#change-print');
const printinp = document.querySelector('#print');

changeColorButton.addEventListener('click', () => {
  const color = colorInput.value;
  box.style.backgroundColor = color;
});

chPri.addEventListener('click', () => {
  const pic = ['0', 'url(https://sun1.userapi.com/sun1-98/s/v1/ig2/a94S9YxyvqeCjlO4gjtPb6YI_w6CVxX-yiHvlSQ1Frrka1JVfRYVP1z7eNIrRo5NT7q0caSEp6ztix9Ebtqa65Gp.jpg?size=1080x1080&quality=95&type=album', 'url(https://sun1.userapi.com/sun1-94/s/v1/ig2/PjfoiOhR1-XWHHWV95-IlNQuDKwlmFQ9_mhonM6gtqZvjq817KuUcdO_9PU3ytljLsfjYnNFlNh1Oqc8jGh_MldA.jpg?size=960x768&quality=95&type=album',
  ];
  const num = printinp.value;
  box.style.backgroundImage = pic[num];
});
