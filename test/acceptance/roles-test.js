import { setupAcceptanceTest } from '@denali-js/core';

const test = setupAcceptanceTest();

test('POST /roles > creates a role', async (t) => {
  let result = await t.context.app.post('/roles', {
    // Add the role payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /roles > should list roles', async (t) => {
  let result = await t.context.app.get('/roles');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /roles/:id > should show a role', async (t) => {
  let { body } = await t.context.app.post('/roles', {
    // Add the role payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/roles/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /roles/:id > should update a role', async (t) => {
  let { body } = await t.context.app.post('/roles', {
    // Add the role payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/roles/${ id }`, {
    // Add the role payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /roles/:id > should delete a role', async (t) => {
  let { body } = await t.context.app.post('/roles', {
    // Add the role payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/roles/${ id }`);

  t.is(result.status, 204);
});
