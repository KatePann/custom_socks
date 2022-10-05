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
      name, surname, phone, email, password,
    } = req.body;
    await User.create({
      name, surname, phone_number: Number(phone), email, password,
    });
    res.redirect('/');
  } catch (error) {
    console.log('/reg errror', error);
  }
});

module.exports = router;
