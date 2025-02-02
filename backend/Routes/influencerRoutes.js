const express = require('express');
const router = express.Router();
const influencerController = require('../controllers/influencerController');

router.get('/', influencerController.getInfluencers);
router.post('/', influencerController.createInfluencer);
router.get('/:id', influencerController.getInfluencerById);

module.exports = router;