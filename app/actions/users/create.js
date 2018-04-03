import ApplicationAction from '../application';
import User from '../../models/user';

export default class CreateUser extends ApplicationAction {

  async respond({ body }) {
    let user = await User.create(body);
    this.render(201, user);
  }

}
