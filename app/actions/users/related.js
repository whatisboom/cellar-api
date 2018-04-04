import ApplicationAction from '../application';
import User from '../../models/user';

export default class FetchBeersForUser extends ApplicationAction {

  async respond({ params }) {
    const user = await User.find(params.id);
    if (!user) { return []; } // todo, handle errors
    return {
      beers: await user.getBeers()
    };
  }

}
