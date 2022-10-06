const express = require('express');
const renderTemplate = require('../lib/RenderTemplate');
const { User } = require('../../db/models');

const router = express.Router();

const Reg = require('../views/Reg');

router.get('/reg', (req, res) => {
  renderTemplate(Reg, {}, res);
});
router.post('/reg', async (req, res) => {
  try {
    const {
      name, surname, patronymic, phone, email, adress, password,
    } = req.body;
    const newUs = await User.create({
      name, surname, patronymic, phone_number: Number(phone), email, home_adress: adress, password,
    });
    req.session.mur = newUs.name;
    req.session.user_id = newUs.dataValues.id;
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    console.log('/reg errror', error);
  }
});

module.exports = router;
