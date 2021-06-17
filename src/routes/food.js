'use strict';

//dependencies 
const express = require('express');
const router = express.Router();

//collections

//routes
router.get('/food', replaceMe); //getAll items
router.get('/food/:id', replaceMe); //getOne item
router.post('/food', replaceMe); //create a new item
router.put('/food/:id', replaceMe); //modify item
router.delete('/food/:id',replaceMe); //delete one item

function replaceMe(req, res) {
  res.status(200).send('Hello, World!');
}

module.exports = router;
