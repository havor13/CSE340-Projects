const express = require('express');
const router = express.Router();

// Deliver the home view wrapped in layout
router.get('/', (req, res) => {
  res.render('index', { layout: 'layout' });
});

module.exports = router;
