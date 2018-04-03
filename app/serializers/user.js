import ApplicationSerializer from './application';
import BeerSerializer from './beer';

export default class UserSerializer extends ApplicationSerializer {

  attributes = [
    'username',
    'firstName',
    'lastName'
  ];

  relationships = {
    beers: {
      strategy: 'embed',
      serializer: BeerSerializer
    }
  };

}
