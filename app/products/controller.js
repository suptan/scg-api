'use strict'

var express = require('express');

//setup router for API
var router = express.Router();

//Define route name
const ROUTE_NAME = '/products';

//configure products route
router.route(ROUTE_NAME)
  //Post route to add new record
  // .post((req, res) => {
  //   helper.saveNew(req, res);
  // })

  //Get route to get all records
  .get( async (req, res) => {
    console.log('GET /products');
    const data = await getBookingData();
    res.status(200).json(data)
    // helper.getAll(req, res);
  });

module.exports = router;
