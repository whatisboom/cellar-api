import ApplicationAction from '../application';
import User from '../../models/user';

export default class AddBeerToUser extends ApplicationAction {

  async respond({ params, newBeer }) {
    const user = await User.find(params.id);
    const beers = user.getBeers();
    
    if (!beers.find(beer => beer.id == newBeer.id)) {
      user.addBeer(newBeer);
    }
    return newBeer; //await user.save();
  }

}
