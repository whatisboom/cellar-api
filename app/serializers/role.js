import ApplicationSerializer from './application';

export default class RoleSerializer extends ApplicationSerializer {

  attributes = [
    'name'
  ];

  relationships = {};

}
