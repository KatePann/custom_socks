const express = require('express');

const router = express.Router();

// const { entry, tag } = require('../../db/models');

const renderTemplate = require('../lib/RenderTemplate');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  // async
//   const { newUser } = req.session;
//   const allPosts = await entry.findAll({ raw: true });
//   renderTemplate(Home, { allPosts, newUser }, res);
  renderTemplate(Home, null, res);
});

module.exports = router;
