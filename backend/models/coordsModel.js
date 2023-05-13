const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoordsSchema = new Schema(
  {
    map: String,
    url: String,
    character_1: {
      name: String,
      x1: Number,
      y1: Number,
      x2: Number,
      y2: Number
    },
    character_2: {
      name: String,
      x1: Number,
      y1: Number,
      x2: Number,
      y2: Number
    },
    character_3: {
      name: String,
      x1: Number,
      y1: Number,
      x2: Number,
      y2: Number
    },
    character_4: {
      name: String,
      x1: Number,
      y1: Number,
      x2: Number,
      y2: Number
    }
  },
  {
    collection: 'Collection0'
  }
);

// CoordsSchema.virtual('url').get(function () {
//   // We don't use an arrow function as we'll need the this object
//   return `/coordinates/${this._id}`;
// });

module.exports = mongoose.model('Coords', CoordsSchema);
