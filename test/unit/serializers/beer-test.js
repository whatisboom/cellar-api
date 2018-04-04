import { setupUnitTest } from '@denali-js/core';
import Beer from '../serializers/beer';

const test = setupUnitTest();

test('BeerSerializer', (t) => {
  t.is(typeof Beer, 'object');
});