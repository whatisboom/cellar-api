import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {

  attributes = [
    'username',
    'firstName',
    'lastName'
  ];

  relationships = {};

}
