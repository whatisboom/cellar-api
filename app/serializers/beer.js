import ApplicationSerializer from './application';

export default class BeerSerializer extends ApplicationSerializer {

  attributes = [
    'name'
  ];

  relationships = {};

}
