import { attr } from '@denali-js/core';
import ApplicationModel from './application';

export default class Beer extends ApplicationModel {

  static schema = {
    name: attr('string')
  };

}
