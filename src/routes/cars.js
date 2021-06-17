'use strict';

//dependencies 
const express = require('express');
const router = express.Router();

//collections

//routes
router.get('/cars', replaceMe); //getAll items
router.get('/cars/:id', replaceMe); //getOne item
router.post('/cars', replaceMe); //create a new item
router.put('/cars/:id', replaceMe); //modify item
router.delete('/cars/:id',replaceMe); //delete one item

function replaceMe(req, res) {
  res.status(200).send('Hello, World!');
}

module.exports = router;
