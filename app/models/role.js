import { attr } from '@denali-js/core';
import ApplicationModel from './application';

export default class Role extends ApplicationModel {

  static schema = {
    "name": attr('string')
  };

}
