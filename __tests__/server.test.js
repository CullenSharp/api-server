'use strict';

//imports
const server = require('../src/server.js');
const data = require('../src/models/index.js');

//dependencies
const supertest = require('supertest');


const request = supertest(server.app);

beforeAll(async () => {
  await data.db.sync();
});
afterAll(async () => {
  await data.db.drop();
});


describe('testing the server', () => {
  test('testing 404 on a bad route', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toEqual(404);
  });


  test('testing 404 on a bad method', async () => {
    const response = await request.put('/car');
    expect(response.status).toEqual(404);
  });
});