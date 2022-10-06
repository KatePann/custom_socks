require('dotenv').config(); // реквайрим .env

// Внешние импорты
const path = require('path'); // подключаем css
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // хранилище для сессий

// Внутренние импорты
const { sequelize } = require('./db/models');
const renderTemplate = require('./src/lib/RenderTemplate');

const HomeRouter = require('./src/routes/HomeRoutes'); // подключаем мидлварку
const BasketRoutes = require('./src/routes/BasketRoutes');
const PersonalRouter = require('./src/routes/PersonalAccRoutes');
const UserRouter = require('./src/routes/UserRoutes');
const UserAut = require('./src/routes/UserAutRout');

const { SESSION_SECRET } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public/'))); // подключаем css
app.use(express.json()); // мидлвар на чтение телa постов
app.use(express.urlencoded({ extended: true })); // мидлвар на чтение телa постов


//  Создание конфига для куки
const sessionConfig = {
  name: 'SocksCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'socks', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));// подключение мидлвара для куки

app.use('/', HomeRouter);// подключаем мидлварки
app.use('/basket', BasketRoutes);
app.use('/personal', PersonalRouter);
app.use('/user', UserRouter);
app.use('/user', UserAut);


const PORT = process.env.PORT || 3001;

app.get('/logout', (req, res) => { // делаем логаут
  try {
    console.log(req.session.mur);
    if (req.session.mur) {
      req.session.destroy(() => { // убиваем сессию
        res.clearCookie('SocksCookie');// убиваем куки при выходе
        res.redirect('/');
      });
    }
  } catch (error) {
    res.send(`Error ---123---> ${error}`);
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение с базой установлено!');
  } catch (err) {
    console.log(err, 'Error!');
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
