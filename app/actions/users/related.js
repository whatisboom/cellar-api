import ApplicationAction from '../application';
import User from '../../models/user';

export default class FetchRelatedForUser extends ApplicationAction {

  async respond({ params }) {
    const user = await User.find(params.id);
    if (!user) { return []; } // todo, handle errors

    /* eslint-disable-next-line no-undef */
    const [beers, roles] = await Promise.all([user.getBeers(), user.getRoles()]);
    
    return {
      beers,
      roles
    };
  }

}
