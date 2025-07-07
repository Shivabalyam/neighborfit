const express = require('express');
const router = express.Router();
const Neighborhood = require('../models/Neighborhood');

// Helper function to calculate the score
function calculateScore(userPrefs, neighborhood) {
  return (
    (neighborhood.safety || 0) * userPrefs.safety +
    (neighborhood.affordability || 0) * userPrefs.affordability +
    (neighborhood.publicTransport || 0) * userPrefs.publicTransport +
    (neighborhood.greenery || 0) * userPrefs.greenery +
    (neighborhood.walkability || 0) * userPrefs.walkability
  );
}

router.post('/', async (req, res) => {
  const userPrefs = req.body;

  const requiredFields = ['safety', 'affordability', 'publicTransport', 'greenery', 'walkability'];

  // ✅ Check for missing fields
  for (const field of requiredFields) {
    if (!(field in userPrefs)) {
      return res.status(400).json({ error: `Missing field: ${field}` });
    }
  }

  // ✅ Check for invalid values (not in range 1-5)
  for (const [key, value] of Object.entries(userPrefs)) {
    if (typeof value !== 'number' || value < 1 || value > 5) {
      return res.status(400).json({ error: `Invalid value for "${key}". Must be a number between 1 and 5.` });
    }
  }

  // ✅ Edge Case: All inputs are 1 (minimum)
  const allAreOne = Object.values(userPrefs).every(val => val === 1);
  if (allAreOne) {
    return res.status(400).json({
      warning: "All preferences are set to minimum (1). Please adjust your preferences to get meaningful results."
    });
  }

  try {
    const neighborhoods = await Neighborhood.find({});

    // Calculate score for each neighborhood
    const scored = neighborhoods.map(n => {
      const score = calculateScore(userPrefs, n);
      return { ...n.toObject(), score };
    });

    // ✅ Sort by score and return top 3
    const topMatches = scored
      .filter(n => !isNaN(n.score))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    res.json(topMatches);
  } catch (err) {
    console.error('Error in /api/match:', err);
    res.status(500).json({ error: 'Server error while matching neighborhoods.' });
  }
});

module.exports = router;
