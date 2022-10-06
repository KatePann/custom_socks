const express = require('express');

const router = express.Router();

const { Favorites } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const delF = await Favorites.findByPk(req.params.id, { raw: true });
  await Favorites.destroy({ where: { id: req.params.id } });

  res.redirect('/favorite');
});

module.exports = router;
