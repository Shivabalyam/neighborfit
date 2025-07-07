const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
  name: String,
  city: String,
  safety: Number,
  affordability: Number,
  publicTransport: Number,
  greenery: Number,
  walkability: Number
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);
