// const { raw } = require('express');
const express = require('express');

const router = express.Router();

const { Sock, Basket } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const basketVievs = require('../views/Basket');

router.get('/', async (req, res) => {
  try {
    const { user_id, mur } = req.session
    const myBasket = await Basket.findAll({ where: { user_id }, raw: true });
    const socks = [];
    for (let i = 0; i < myBasket.length; i++) {
      const mySocks = await Sock.findOne({ where: { id: myBasket[i].socks_id }, raw: true });
      socks.push(mySocks);
    }
    const total = socks.map((el) => el.price).reduce((x, y) => x + y, 0);
    const allSock = await Basket.findAll({ where: { user_id }, include: [{ model: Sock, attributes: ['color', 'step_color', 'print', 'price'] }], raw: true });
    

    renderTemplate(basketVievs, {
      user_id, mur, total, allSock, myBasket,
    }, res);
  } catch (error) {
    res.send(`Error ---456---> ${error}`);
  }
});

module.exports = router;
