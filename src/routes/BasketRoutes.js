// const { raw } = require('express');
const express = require('express');

const router = express.Router();

const { Sock, Basket } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const basketVievs = require('../views/Basket');

router.get('/', async (req, res) => {
  try {
    const { user_id, mur } = req.session;
    console.log('user_id>>>>', user_id);
    const myBasket = await Basket.findAll({ where: { user_id }, raw: true });
    console.log('myBasket>>>>', myBasket);
    const socks = [];
    for (let i = 0; i < myBasket.length; i++) {
      console.log('Sock', Sock);
      console.log('myBasket_id>>>>', myBasket[i].socks_id);
      const mySocks = await Sock.findOne({ where: { id: myBasket[i].socks_id }, raw: true });
      console.log('mySocks>>>>', mySocks);
      socks.push(mySocks);
      console.log('socks>>>>', socks);
    }
    const total = socks.map((el) => el.price).reduce((x, y) => x + y, 0);
    console.log('total>>>>', total);
    const allSock = await Basket.findAll({ where: { user_id }, include: [{ model: Sock, attributes: ['color', 'step_color', 'print', 'price'] }], raw: true });
    console.log('allSock>>>>>', allSock);

    renderTemplate(basketVievs, {
      user_id, mur, total, allSock, myBasket,
    }, res);
  } catch (error) {
    res.send(`Error ---456---> ${error}`);
  }
});

module.exports = router;
