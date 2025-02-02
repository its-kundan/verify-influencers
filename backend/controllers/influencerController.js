const Influencer = require('../models/Influencer');

const getInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.json(influencers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createInfluencer = async (req, res) => {
  const influencer = new Influencer(req.body);
  try {
    const newInfluencer = await influencer.save();
    res.status(201).json(newInfluencer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getInfluencerById = async (req, res) => {
  try {
    const influencer = await Influencer.findById(req.params.id);
    if (!influencer) return res.status(404).json({ message: 'Influencer not found' });
    res.json(influencer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getInfluencers, createInfluencer, getInfluencerById };