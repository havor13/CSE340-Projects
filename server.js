const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware: serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Port setup (Render + local)
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`✅ CSE Motors server running on port ${PORT}`);
});
