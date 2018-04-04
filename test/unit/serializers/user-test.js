import { setupUnitTest } from '@denali-js/core';
import User from '../serializers/user';

const test = setupUnitTest();

test('UserSerializer', (t) => {
  t.is(typeof User, 'object');
});
