const express = require('express');
const renderTemplate = require('../lib/RenderTemplate');

const SocksGenerate = require('../views/SocksGenerate');

const router = express.Router();

router.get('/gener', (req, res) => {
  const { mur } = req.session;
  renderTemplate(SocksGenerate, { mur }, res);
});

module.exports = router;
