const express = require('express');
const renderTemplate = require('../lib/RenderTemplate');
// const { User } = require('../../db/models');

const router = express.Router();
const Aut = require('../views/Aut');

router.get('/aut', (req, res) => {
  renderTemplate(Aut, {}, res);
});

module.exports = router;