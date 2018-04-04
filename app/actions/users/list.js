import ApplicationAction from '../application';
import User from '../../models/user';

export default class ListUsers extends ApplicationAction {

  protected = false;
  
  async respond() {
    return await User.all();
  }

}
