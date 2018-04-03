import ApplicationAction from '../application';
import User from '../../models/user';

export default class DestroyUser extends ApplicationAction {

  async respond({ params }) {
    let user = await User.find(params.id);
    await user.delete();
    this.render(204);
  }

}
