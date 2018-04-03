import { attr /*, hasOne, hasMany */ } from '@denali-js/core';
import ApplicationModel from './application';

export default class User extends ApplicationModel {

  static schema = {
    username: attr('string'),
    firstName: attr('string'),
    lastName: attr('string')
  };

}
