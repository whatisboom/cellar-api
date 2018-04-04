import ApplicationSerializer from './application';
import BeerSerializer from './beer';
import RoleSerializer from './role';

export default class UserSerializer extends ApplicationSerializer {

  attributes = [
    'username',
    'firstName',
    'lastName',
    'roles'
  ];

  relationships = {
    beers: {
      strategy: 'embed',
      serializer: BeerSerializer
    },
    roles: {
      strategy: 'embed',
      serializer: RoleSerializer
    }
  };

}
