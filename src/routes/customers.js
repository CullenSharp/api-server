'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


// === === routers === === //
router.post('/customers', create);
router.get('/customers', getAll);
router.get('/customers/:customerId', getOne);
router.put('/customers/:customerId', update);
router.delete('/customers/:customerId', remove);


// === === router functions === === //
async function create(request, response) {
  const customerObject = request.body;
  const customerData = await data.customer.create(customerObject);

  response.status(200).send(customerData);
}

async function getAll(request, response) {
  const allCustomers = await data.customer.findAll();

  response.status(200).send(allCustomers);
}

async function getOne(request, response) {
  const customerId = request.params.customerId;
  const singleCustomer = await data.customer.findOne({
    where: {
      id: customerId,
    },
  });

  response.status(200).send(singleCustomer);
}

async function update(request, response) {
  const customerId = request.params.customerId;
  const customerObject = request.body;
  const customerData = await data.customer.findOne({ where: { id: customerId } });
  await customerData.update(customerObject);

  response.status(200).send(customerData);
}

async function remove(request, response) {
  const customerId = request.params.customerId;
  await data.customer.destroy({ where: { id: customerId } });

  response.status(204).send('success!');
}

module.exports = router;
