const express = require('express');

const router = express.Router();

const { Sock, Basket } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const basketVievs = require('../views/Basket');

router.get('/', async (req, res) => {
  const { newUser } = req.session;
  // const myBasket = await Basket.findAll({ where: { user_id } });
  // const mySock = await Sock.findAll();

  renderTemplate(basketVievs, null, res);
});

module.exports = router;
