const express = require('express');

const router = express.Router();

const DrumCoords = require('../models/drumCoords');

router.get('/', (req, res) => {
  DrumCoords.find({ })
    .then((data) => {
      console.log('it worked!');
      res.json(data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
});

module.exports = router;