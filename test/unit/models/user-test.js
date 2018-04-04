import { attr, setupUnitTest } from '@denali-js/core';
import User from '../models/user';

const test = setupUnitTest();

test('User Model', (t) => {
  t.is(User.schema, {
    name: attr('string')
  })
});
