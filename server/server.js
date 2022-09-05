const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./database/DB");
const btc = require('./routes/api/btcCandle');
const sec = require('./routes/api/sec');

require('dotenv').config()

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(cors());

connectDB();


// https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4
app.use('/api/btc', btc);
app.use('/api/sec', sec);

app.listen(process.env.PORT, () => {
  console.log(`Server: ${process.env.PORT}`);
});