require('dotenv').config();
const bodyParser = require('body-parser')

const express = require('express');

const router = require('./app/router');

const PORT = process.env.PORT || 5000;

const app = express();
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Application started at http://localhost:${PORT}`);
});
