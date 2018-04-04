import { attr, hasMany } from '@denali-js/core';
import ApplicationModel from './application';

export default class User extends ApplicationModel {

  static schema = {
    beers: hasMany('beer'),
    firstName: attr('string'),
    lastName: attr('string'),
    roles: hasMany('role'),
    username: attr('string')
  };

}
