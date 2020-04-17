'use strict'

var express = require('express');

//setup router for API
var router = express.Router();

//Define route name
const ROUTE_NAME = '/sequences';

//configure sequences route
router.route(ROUTE_NAME)

  //Get route to get all records
  .get( async (req, res) => {
    console.log('GET /sequences');
    const sequences = await getSequences();
    res.status(200).json(sequences)
  });

module.exports = router;
