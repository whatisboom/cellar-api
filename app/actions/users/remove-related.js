import ApplicationAction from '../application';
import User from '../../models/user';

export default class RemoveAllBeersFromUser extends ApplicationAction {

  async respond({ params }) {
    const user = await User.find(params.id);
    await user.setBeers([]);
    return await user.save();
  }

}
