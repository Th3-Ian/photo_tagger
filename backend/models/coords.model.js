const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoordsSchema = new Schema({
  map: String,
  character_1: { name: String, xCoord: Number, yCoord: Number },
  character_2: { name: String, xCoord: Number, yCoord: Number },
  character_2: { name: String, xCoord: Number, yCoord: Number },
  character_3: { name: String, xCoord: Number, yCoord: Number }
});

CoordsSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/coordinates/${this._id}`;
});

module.exports = mongoose.model('Coords', CoordsSchema);
