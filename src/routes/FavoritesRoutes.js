// const { raw } = require('express');
const express = require('express');

const router = express.Router();

const { Sock, Favorites } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const favotiteVievs = require('../views/Favorites');

router.get('/', async (req, res) => {
  try {
  const { user_id, mur } = req.session;

  const myFavor = await Favorites.findAll({ where: { user_id }, raw: true });
  const allSockFav = await Favorites.findAll({ where: { user_id }, include: [{ model: Sock, attributes: ['color', 'step_color', 'print', 'price'] }], raw: true });

  renderTemplate(favotiteVievs, {
    user_id, mur, myFavor, allSockFav,
  }, res);
  } catch (error) {
    res.send(`Error ---456---> ${error}`);
  }
});

module.exports = router;
