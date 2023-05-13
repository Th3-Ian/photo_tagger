const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
//const { getCoords } = require('../controllers/coordsController');
const Coords = require('../models/coordsModel.js');

router.get(
  '/greece',
  asyncHandler(async (req, res) => {
    const coordinate = await Coords.find({ map: 'greece' });
    if (!coordinate) {
      throw new Error('coords not found');
    }
    res.status(200).json(coordinate);
  })
);

router.get(
  '/spain',
  asyncHandler(async (req, res) => {
    const coordinate = await Coords.find({ map: 'spain' });
    if (!coordinate) {
      throw new Error('coords not found');
    }
    res.status(200).json(coordinate);
  })
);

router.get(
  '/australia',
  asyncHandler(async (req, res) => {
    const coordinate = await Coords.find({ map: 'beach' });
    if (!coordinate) {
      throw new Error('coords not found');
    }
    res.status(200).json(coordinate);
  })
);

module.exports = router;
