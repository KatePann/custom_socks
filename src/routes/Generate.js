const express = require('express');

const router = express.Router();
const renderTemplate = require('../lib/RenderTemplate');
const { Sock, Basket } = require('../../db/models');

const SocksGenerate = require('../views/SocksGenerate');


router.get('/gener', (req, res) => {
  const { mur } = req.session;
  
  renderTemplate(SocksGenerate, { mur }, res);
});

router.post('/gener', async (req, res) => {
  try {
    const { color, print } = req.body;
    const mySocks = await Sock.create({ color, print });
    console.log('mySocks.id>>>>>', mySocks.id);
    const {user_id}=req.session
    
    const myBask = await Basket.create({ user_id, socks_id:mySocks.id });
    console.log('myBask>>>>>',myBask);
    res.status(200)
    // res.redirect('/gener');
  } catch (error) {
    console.log('/gener errror', error);
  }
});
module.exports = router;
