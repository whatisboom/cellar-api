import ApplicationAction from '../application';
import User from '../../models/user';

export default class FetchRelatedForUser extends ApplicationAction {

  protected = false;

  async respond({ params }) {
    
    const user = await User.find(params.id);
    
    if (!user) {
      this.render(404);
      return;
    } // todo, handle errors    
    
    switch (params.relation) {
      case 'beers':
        return await user.getBeers();
      case 'roles':
        return await user.getRoles();
      default:
        this.render(400);
        break;
    }

  }

}
