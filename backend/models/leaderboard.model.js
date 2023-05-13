const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please write your name']
    },
    score: Number,
    map: String
  },
  {
    timestamps: true
  }
);

LeaderboardSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/leaderboard//${this._id}`;
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
