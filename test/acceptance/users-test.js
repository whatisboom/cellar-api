import { setupAcceptanceTest } from '@denali-js/core';

const test = setupAcceptanceTest();

const UserPayload = {
  "username": "whatistest",
  "firstName": "Test",
  "lastName": "User"
};

test('POST /users > creates a user', async (t) => {
  let result = await t.context.app.post('/users', UserPayload);

  t.is(result.status, 201);
  t.is(result.body.username, 'whatistest');
});

test('GET /users > should list users', async (t) => {
  let result = await t.context.app.get('/users');

  t.is(result.status, 200);
  //t.is(result.body[0].username, 'bar');
});

test('GET /users/:id > should show a user', async (t) => {
  let { body } = await t.context.app.post('/users', UserPayload);
  let id = body.id;

  let result = await t.context.app.get(`/users/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /users/:id > should update a user', async (t) => {
  let { body } = await t.context.app.post('/users', UserPayload);
  let id = body.id;

  let result = await t.context.app.patch(`/users/${ id }`, UserPayload);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /users/:id > should delete a user', async (t) => {
  let { body } = await t.context.app.post('/users', UserPayload);
  let id = body.id;

  let result = await t.context.app.delete(`/users/${ id }`);

  t.is(result.status, 204);
});
