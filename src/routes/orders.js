'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


// === === routers === === //
router.post('/orders', create);
router.get('/orders', getAll);
router.get('/orders/:orderId', getOne);
router.put('/orders/:orderId', update);
router.delete('/orders/:orderId', remove);


// === === router functions === === //
async function create(request, response) {
  const orderObject = request.body;
  const orderData = await data.order.create(orderObject);

  response.status(200).send(orderData);
}

async function getAll(request, response) {
  const allOrders = await data.order.findAll();

  response.status(200).send(allOrders);
}

async function getOne(request, response) {
  const orderId = request.params.orderId;
  const singleOrder = await data.order.findOne({
    where: {
      id: orderId,
    },
  });

  response.status(200).send(singleOrder);
}

async function update(request, response) {
  const orderId = request.params.orderId;
  const orderObject = request.body;
  const orderData = await data.order.findOne({ where: { id: orderId } });
  await orderData.update(orderObject);

  response.status(200).send(orderData);
}

async function remove(request, response) {
  const orderId = request.params.orderId;
  await data.order.destroy({ where: { id: orderId } });

  response.status(204).send('success!');
}

module.exports = router;
