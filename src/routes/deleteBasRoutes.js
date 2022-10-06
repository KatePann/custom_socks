const express = require('express');

const router = express.Router();

const { Basket } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const delB = await Basket.findByPk(req.params.id, { raw: true });
  await Basket.destroy({ where: { id: req.params.id } });

  res.redirect('/basket');
});

module.exports = router;
