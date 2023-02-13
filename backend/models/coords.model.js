const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoordinateModelSchema = new Schema({
  map: String,
  character_1: { name: String, xCoord: Number, yCoord: Number },
  character_2: { name: String, xCoord: Number, yCoord: Number },
  character_2: { name: String, xCoord: Number, yCoord: Number },
  character_3: { name: String, xCoord: Number, yCoord: Number }
});

const CoordinateModel = mongoose.model(
  'CoordinateModel',
  CoordinateModelSchema
);
