const express = require('express');
const router = express.Router();

// Deliver the home view
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;
