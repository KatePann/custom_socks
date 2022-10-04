const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/RenderTemplate');
const Basket = require('../views/Basket');

router.get('/', (req, res) => {
  renderTemplate(Basket, null, res);
});

module.exports = router;
