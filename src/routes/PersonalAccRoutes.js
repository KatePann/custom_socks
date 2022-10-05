const express = require('express');

const router = express.Router();

// const { User } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const Personal = require('../views/PersonalAcc');

router.get('/', async (req, res) => {
  // const user = await User.findOne({ where: { id: req.params.id } });
  renderTemplate(Personal, null, res);
});

module.exports = router;
