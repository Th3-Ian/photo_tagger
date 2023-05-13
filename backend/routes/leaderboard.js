const express = require('express');
const router = express.Router();
const {
  getLeaderboard,
  setLeaderboard
} = require('../controllers/leaderboardController');

router.route('/').get(getLeaderboard).post(setLeaderboard);

module.exports = router;
