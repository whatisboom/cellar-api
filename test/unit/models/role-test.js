import { attr, setupUnitTest } from '@denali-js/core';
import Role from '../models/role';

const test = setupUnitTest();

test('Role Model', (t) => {
  t.is(Role.schema, {
    name: attr('string')
  })
});
