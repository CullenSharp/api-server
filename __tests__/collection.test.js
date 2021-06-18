'use strict';

const {db, customerCollection, orderCollection} = require('../src/models/index');

beforeAll( async () => {
  await db.sync();
});

afterAll( async () => {
  await db.drop();
});

describe('testing collections', () => {
  test('Create a record', async () => {
    const newCustomer = await customerCollection.create({name: 'cullen'});

    expect(newCustomer.id).toEqual(1);
    expect(newCustomer.name).toEqual('cullen');

    const newOrder = await orderCollection.create({name:'string beans', customerId: newCustomer.id});

    expect(newOrder.name).toEqual('string beans');
    expect(newOrder.customerId).toEqual(1);
  });

  test('Read a list of records', async () => {
    const customers = await customerCollection.read();
    expect(customers[0].name).toEqual('cullen');

    const orders = await orderCollection.read();

    expect(orders[0].name).toEqual('string beans');
  });

  test('Update a record', async () => {
    const customer = await customerCollection.read(1);
    const order = await orderCollection.read(1);

    expect(customer.name).toEqual('cullen');
    expect(order.name).toEqual('string beans');
  });

  test('Delete a record', async () => {
    await customerCollection.delete(1);
    await orderCollection.delete(1);

    const customer = await customerCollection.read(1);
    const order = await orderCollection.read(1);

    expect(order).toBeFalsy();
    expect(customer).toBeFalsy();
  });
});