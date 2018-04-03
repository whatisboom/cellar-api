import ApplicationAction from '../application';
import User from '../../models/user';
import Beer from '../../models/beer';

export default class AddBeerToUser extends ApplicationAction {

  async respond({ params, body }) {
    const user = await User.find(params.id);
    const beers = await user.getBeers();

    let existing = false;
    if (
      beers.filter(beer => beer.id === body.id).length === 0 // if it doesn't exist
    ) {
      existing = await Beer.find(body.id);
      if (existing) {
        await user.addBeer(existing);
      }
    }
    return await user.save();
  }

}
