const express = require('express');

const router = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const PersonalAcc = require('../views/PersonalAcc');

router.get('/', async (req, res) => {
  try {
    const { mur,user_id } = req.session;

    const myUser = await User.findOne({ where: { id: user_id }, raw: true });
    console.log(myUser);
    // const allSockFav = await User.findAll({ where: { user_id }, include: [{ model: Sock, attributes: ['color', 'step_color', 'print', 'price'] }], raw: true });

    renderTemplate(PersonalAcc, {
      mur, myUser,
    }, res);
  } catch (error) {
    res.send(`Error ---456---> ${error}`);
  }
});

module.exports = router;
