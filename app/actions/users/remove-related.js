import ApplicationAction from '../application';
import User from '../../models/user';

export default class RemoveAllBeersFromUser extends ApplicationAction {

  async respond({ params }) {
    const user = await User.find(params.id);
    if (!user) {
      this.render(404);
      return;
    }
    switch (params.relation) {
      case 'beers':
        await user.setBeers([]);
        break;
      case 'roles':
        await user.setRoles([]);
        break;
      default:
        this.render(400);
        return;
    }
    
    return await user.save();
  }

}
