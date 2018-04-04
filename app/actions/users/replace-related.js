import ApplicationAction from '../application';
import User from '../../models/user';
import Beer from '../../models/beer';

export default class UpdateBeersForUser extends ApplicationAction {

  async respond({ params, body }) {
    if (!body) {
      return;
    }
    const user = await User.find(params.id);
    
    const beerPromises = body.map(beerToAdd => {
      return Beer.find(beerToAdd.id);
    });
    /* eslint-disable-next-line no-undef */
    const beers = await Promise.all(beerPromises);

    await user.setBeers(beers);
    
    return await user.save();
  }

}
