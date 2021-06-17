'use strict';

//dependencies
const { Sequelize, DataTypes } = require('sequelize');

//models
const orderModel = require('./orders');
const customerModel = require('./customers');
const Collection = require('./collection');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

//what is this doing?
const sequelize = new Sequelize(DATABASE_URL);

//why do I pass in sequelize? what is it
const orders = orderModel(sequelize, DataTypes);
const customers = customerModel(sequelize, DataTypes);

const customerCollection = new Collection('customers', customers);
const orderCollection = new Collection('orders', orders);

//what are this options?
customerCollection.createAssociation('hasMany', orderCollection.model, {foreignKey: 'customerId', sourceKey: 'id'});
orderCollection.createAssociation('belongsTo', customerCollection.model, {foreignKey: 'customerId', targetKey: 'id'});

module.exports = {
  db: sequelize,
  customerCollection,
  orderCollection,
};
