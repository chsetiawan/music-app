const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const drumCoordsSchema = new Schema({
  name: String,
  areas: [
    {
      id: Number,
      shape: String,
      coords: [Number]
    }
  ]
});

// Model
const DrumCoords = mongoose.model('DrumCoords', drumCoordsSchema);

module.exports = DrumCoords;