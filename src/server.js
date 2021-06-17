'use strict';

//dependencies
const express = require('express');
const cors = require('cors');

//set up 
const app = express();
app.use(cors());
app.use(express.json());

//application middleware
const logger = require('./middleware/logger');
app.use(logger);

//routes
const foodRoutes = require('./routes/food');
const carsRoutes = require('./routes/cars');
app.use(foodRoutes);
app.use(carsRoutes);

module.exports = {
  app: app,
  start: (PORT) => {app.listen(PORT, console.log(`Alert, awake, alive, on ${PORT}`));},
};
