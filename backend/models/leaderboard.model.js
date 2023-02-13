const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LeaderboardModelSchema = new Schema({
  name: String,
  score: Number,
  required: [true, 'Please write your name']
});

const LeaderboardModel = mongoose.model(
  'LeaderboardModel',
  LeaderboardModelSchema
);
