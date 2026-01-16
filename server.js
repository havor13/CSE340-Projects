// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3300;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Index route delivers the Home view
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Custom page route
app.get('/custom', (req, res) => {
  res.render('custom', { title: 'Custom' });
});

// Catch-all route for undefined pages
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1><p>This page is under construction.</p>');
});

// Start server
app.listen(port, () => {
  console.log(`CSE Motors app running at http://localhost:${port}`);
});
