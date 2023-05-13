const asyncHandler = require('express-async-handler');

const Leaderboard = require('../models/leaderboard.model');

const getLeaderboard = asyncHandler(async (req, res) => {
  const leaderboard = await Leaderboard.find();

  res.status(200).json({ leaderboard });
});

const setLeaderboard = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add name');
  }

  const score = await Leaderboard.create({
    name: req.body.text,
    highscore: req.body.number,
    map: req.body.text
  });

  res.status(200).json(score);
});

module.exports = { getLeaderboard, setLeaderboard };
