const form = document.querySelector('form');
const btn1 = document.getElementById('bask');
// const btn2 = document.getElementById('fav');

btn1.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log('Привет');
  const color = form.color.value;
  const print = form.print.value;
  const obj = JSON.stringify({ color, print });
  const resp = await fetch('/gener', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: obj,
  });
});


// btn2.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const color = form.color.value;
//   console.log('color>>>>', color);
//   const print = form.print.value;
//   const obj = JSON.stringify({ color, print });
//   const resp = await fetch('/gener', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: obj,
//   });
// });