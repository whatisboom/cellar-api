import { setupUnitTest } from '@denali-js/core';
import Role from '../serializers/role';

const test = setupUnitTest();

test('RoleSerializer', (t) => {
  t.is(typeof Role, 'object');
});