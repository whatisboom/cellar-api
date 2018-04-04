import { compact } from 'lodash';
import ApplicationAction from '../application';
import User from '../../models/user';
import Beer from '../../models/beer';
import Role from '../../models/role';

export default class UpdateRelatedForUser extends ApplicationAction {

  async respond({ params, body }) {
    if (!body) {
      return;
    }
    
    this.user = await User.find(params.id);
    
    if (!this.user) {
      this.render(404);
    }

    switch (params.relation) {
      case 'beers':
        this.setBeers(body);
        break;
      case 'roles':
        this.setRoles(body);
        break;
      default:
        this.render(400);
        break;
    }

    
    
    return await this.user.save();
  }

  async validateRecords(Model, records) {
    const promises = records.map(recordToAdd => {
      return Model.find(recordToAdd.id);
    });

    /* eslint-disable-next-line no-undef */
    return compact(await Promise.all(promises));
  }

  async setBeers(beersToAdd) {
    const beers = await this.validateRecords(Beer, beersToAdd);
    return await this.user.setBeers(beers);
  }

  async setRoles(rolesToAdd) {
    const roles = await this.validateRecords(Role, rolesToAdd);
    return await this.user.setRoles(roles);
  }

}
