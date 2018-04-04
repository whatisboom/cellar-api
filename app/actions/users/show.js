import ApplicationAction from '../application';
import User from '../../models/user';

export default class ShowUser extends ApplicationAction {

  protected = false;
  
  async respond({ params }) {
    const user = await User.find(params.id);
    return user;
  }

}
