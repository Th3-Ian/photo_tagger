const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  name: String,
  score: Number,
  map: String,
  required: [true, 'Please write your name']
});

LeaderboardSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/leaderboard//${this._id}`;
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
