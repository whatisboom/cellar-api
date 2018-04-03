import { setupAcceptanceTest } from '@denali-js/core';

const test = setupAcceptanceTest();

test('POST /beers > creates a beer', async (t) => {
  let result = await t.context.app.post('/beers', {
    // Add the beer payload here
  });

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /beers > should list beers', async (t) => {
  let result = await t.context.app.get('/beers');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /beers/:id > should show a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', {
    // Add the beer payload here
  });
  let id = body.data.id;

  let result = await t.context.app.get(`/beers/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /beers/:id > should update a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', {
    // Add the beer payload here
  });
  let id = body.data.id;

  let result = await t.context.app.patch(`/beers/${ id }`, {
    // Add the beer payload here
  });

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('DELETE /beers/:id > should delete a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', {
    // Add the beer payload here
  });
  let id = body.data.id;

  let result = await t.context.app.delete(`/beers/${ id }`);

  t.is(result.status, 204);
});
