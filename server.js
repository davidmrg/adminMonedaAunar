// const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
// const { auth } = require('express-openid-connect');

// dotenv.load();

const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


const port = process.env.PORT || 3000;
/* if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
} */

// app.use(auth(config));



app.use('/', router);




http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${port}`);
  });
