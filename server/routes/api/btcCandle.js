const express = require('express');
const axios = require("axios");
const app = express.Router();

const type = 'klines';
const symbol = 'BTCUSDT';
const interval = '1M';
const limit = 1000;

app.get('/candle', async (req, res) => {
  try {
    const source = await axios.get(`${process.env.BINANCE}/${type}?symbol=${symbol}&interval=${interval}&limit=${limit}`, {
      headers: {
        'X-MBX-APIKEY': `${process.env.BINANCE_API_KEY}`
      }
    });
    res.send(source.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;