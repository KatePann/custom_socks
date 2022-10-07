const { logPlugin } = require('@babel/preset-env/lib/debug');
const express = require('express');

const router = express.Router();

const { User } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const PersonalAcc = require('../views/PersonalAcc');

router.get('/', async (req, res) => {
  try {
    const { mur, user_id } = req.session;
    const myUser = await User.findOne({ where: { id: user_id }, raw: true });
    console.log('myUser', myUser);
    renderTemplate(PersonalAcc, { mur, myUser }, res);
  } catch (error) {
    res.send(`Error ---963---> ${error}`);
  }
});

module.exports = router;
