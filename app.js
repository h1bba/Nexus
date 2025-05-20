// app.js
const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');

const app = express();
const port = 3000;

// Liquid engine instellen
const engine = new Liquid({
    root: path.resolve(__dirname, 'views'),
    extname: '.liquid'
});

app.engine('liquid', engine.express()); // gebruik liquid als template-engine
app.set('views', './views'); // map met views
app.set('view engine', 'liquid');

// Static files (css, js, etc.)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
