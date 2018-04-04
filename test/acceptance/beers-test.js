import { setupAcceptanceTest } from '@denali-js/core';

const test = setupAcceptanceTest();

const BeerPayload = {
  "name": "River Beer"
};

test('POST /beers > creates a beer', async (t) => {
  let result = await t.context.app.post('/beers', BeerPayload);

  t.is(result.status, 201);
  // t.is(result.body.foo, 'bar');
});

test('GET /beers > should list beers', async (t) => {
  let result = await t.context.app.get('/beers');

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('GET /beers/:id > should show a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', BeerPayload);
  let id = body.id;

  let result = await t.context.app.get(`/beers/${ id }`);

  t.is(result.status, 200);
  // t.is(result.body.foo, 'bar');
});

test('PATCH /beers/:id > should update a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', BeerPayload);
  let id = body.id;

  const patchPayload = {
    "name": "Lupulin Rodeo"
  }

  let result = await t.context.app.patch(`/beers/${ id }`, patchPayload);

  t.is(result.status, 200);
  t.is(result.body.name, 'Lupulin Rodeo');
});

test('DELETE /beers/:id > should delete a beer', async (t) => {
  let { body } = await t.context.app.post('/beers', BeerPayload);
  let id = body.id;

  let result = await t.context.app.delete(`/beers/${ id }`);

  t.is(result.status, 204);
});
