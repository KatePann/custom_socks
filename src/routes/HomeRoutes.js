const express = require('express');

const router = express.Router();

// const { entry, tag } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  // async
  const { mur } = req.session;

  renderTemplate(Home, { mur }, res);
});

module.exports = router;