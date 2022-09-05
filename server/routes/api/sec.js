const express = require('express');
const app = express.Router();
const { queryApi } = require('sec-api');

queryApi.setApiKey(process.env.SEC_APIKEY);

app.get('/', async (req, res) => {
  try {
    const query = {
      query: {
        query_string: {
          "query": "ticker:(AAPL, TSLA)"
        }
      },
      from: '0', // start with first filing. used for pagination.
      size: '10', // limit response to 10 filings
      sort: [
        {
          filedAt: { order: 'desc' } // sort result by filedAt
        }
      ],
    };
    
    const filings = await queryApi.getFilings(query);
    
    console.log('SEC->', filings);
    res.send(filings)
  } catch (error) {
    console.log(error);
  }
  
});

module.exports = app;