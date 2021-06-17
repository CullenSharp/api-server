'use strict';

//dependencies 
const express = require('express');
const router = express.Router();

//collections

//routes
router.get('/customers', replaceMe); //getAll items
router.get('/customers/:id', replaceMe); //getOne item
router.post('/customers', replaceMe); //create a new item
router.put('/customers/:id', replaceMe); //modify item
router.delete('/customers/:id',replaceMe); //delete one item

function replaceMe(req, res) {
  res.status(200).send('Hello, World!');
}

module.exports = router;
