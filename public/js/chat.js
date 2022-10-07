console.log('Hi!')

// * 4 создаём новый вебсокет и изменяем подключение http на ws
const ws = new WebSocket(window.location.href.replace(/^http/, 'ws'));

// * 5 Открываем соединение на фронте 
// * 5.1 выделаем форму на фронте
const { chatForm } = document.forms

// ws.onopen = () => {
//   chatForm.chatBtn.disabled = false;
//   console.log('onopen!!')
// //   ws.send('Привет с фронта!')
//  }

// ws.onmessage = (event) => {
//   console.log(event)
// }

// * 7 Делаем чат
// * 7.1 выделяем див для добавления сообщений
const chatDiv = document.querySelector('#chatDiv')
// * 7.2 выделяем h2 для количества юзеров в чате
const users = document.querySelector('#users');

// ! Новое соединение
ws.onopen = () => {
  chatForm.chatBtn.disabled = false;
  console.log('onopen!!')
}

// ! cтрока для случайного цвета
const color = `#${(`${Math.random().toString(16)}000000`).substring(2, 8).toUpperCase()}` 

// * 8 делаем слушатель формы
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // * 9 достаём текст из инпута
  const { value } = e.target.chatInp
  // * 10 подготовить сообщение для отправки на сервер
  const jsonMess = JSON.stringify({ value, color })
  // console.log(jsonMess)
  // * 11 отправляем на сервер
  ws.send(jsonMess)
})

// * 14принимаем сообщение с серва
ws.onmessage = (e) => {
  const mess = JSON.parse(e.data)
  console.log(mess)
  // * 15 создаём новый html тег
  const h3 = document.createElement('h3')
  h3.innerText = mess.value
  // todo добавление цвета к сообщению
  h3.style.color = mess.color
  chatDiv.appendChild(h3)
  // * 16 отображаем кол-во юзеров
  users.innerText = `Количество юзеров в чате: ${mess.clientSize}`
}