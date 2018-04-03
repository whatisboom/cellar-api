import ApplicationAction from '../application';
import User from '../../models/user';

export default class ListUsers extends ApplicationAction {

  async respond() {
    return await User.all();
  }

}
