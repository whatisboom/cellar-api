import { attr, setupUnitTest } from '@denali-js/core';
import Beer from '../models/beer';

const test = setupUnitTest();

test('Beer Model', (t) => {
  t.is(Beer.schema, {
    name: attr('string')
  })
});
