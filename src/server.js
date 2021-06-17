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
const customerRoutes = require('./routes/customers');
const orderRoutes = require('./routes/orders');
app.use(orderRoutes);
app.use(customerRoutes);

module.exports = {
  app: app,
  start: (PORT) => {app.listen(PORT, console.log(`Alert, awake, alive, on ${PORT}`));},
};
