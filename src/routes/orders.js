'use strict';

//dependencies 
const express = require('express');
const router = express.Router();

//collections

//routes
router.get('/orders', replaceMe); //getAll items
router.get('/orders/:id', replaceMe); //getOne item
router.post('/orders', replaceMe); //create a new item
router.put('/orders/:id', replaceMe); //modify item
router.delete('/orders/:id',replaceMe); //delete one item

function replaceMe(req, res) {
  res.status(200).send('Hello, World!');
}

module.exports = router;
