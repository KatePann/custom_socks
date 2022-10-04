const express = require('express');

const router = express.Router();



const renderTemplate = require('../lib/RenderTemplate');
const Personal = require('../views/PersonalAcc');

router.get('/', (req, res) => {
  renderTemplate(Personal, null, res);
});

module.exports = router;
