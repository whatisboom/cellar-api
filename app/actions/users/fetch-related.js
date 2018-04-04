import ApplicationAction from '../application';
import User from '../../models/user';

export default class FetchBeersForUser extends ApplicationAction {

  protected = false;

  async respond({ params }) {
    
    const user = await User.find(params.id);
    // todo, genericize to use params.relation
    if (!user) { return []; } // todo, handle errors
    return await user.getBeers();
  }

}
