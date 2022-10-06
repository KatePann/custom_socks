const express = require('express');
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/RenderTemplate');
const { User } = require('../../db/models');

const router = express.Router();
const Aut = require('../views/Aut');

router.get('/aut', (req, res) => {
  renderTemplate(Aut, {}, res);
});

router.post('/aut', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { email }, raw: true });
    if (user) {
      const passChek = await bcrypt.compare(password, user.password);
      if (passChek) {
        req.session.mur = user.name;
        req.session.save(() => {
          res.json({err: 'ok'});
        });
      }else{
        res.redirect('/user/aut');
      }
    } else {
      res.json({err:"Я тя затролел))))"});
    }
  } catch (error) {
    console.log('erraut', error);
  }
});

module.exports = router;
