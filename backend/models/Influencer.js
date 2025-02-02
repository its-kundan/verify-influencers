const mongoose = require('mongoose');

const InfluencerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  claims: [
    {
      claim: String,
      category: String,
      status: String,
      confidenceScore: Number,
    },
  ],
});

module.exports = mongoose.model('Influencer', InfluencerSchema);