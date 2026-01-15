const express = require('express');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Port setup (Render + local)
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`CSE Motors running at http://localhost:${PORT}`);
});
