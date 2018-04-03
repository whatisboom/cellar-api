import ApplicationAction from '../application';
import User from '../../models/user';

export default class UpdateUser extends ApplicationAction {

  async respond({ params, body }) {
    let user = await User.find(params.id);
    Object.assign(user, body);
    return await user.save();
  }

}
