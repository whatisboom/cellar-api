import ApplicationAction from '../application';
import User from '../../models/user';
import Beer from '../../models/beer';
import Role from '../../models/role';

export default class AddRelatedToUser extends ApplicationAction {

  async respond({ params, body }) {
    
    this.user = await User.find(params.id);
    
    if (!this.user) { 
      this.render(404);
      return;
     }

    switch (params.relation) {
      case 'beers':
        return await this.addBeerRelation(body);
      case 'roles':
        return await this.addRoleRelation(body);
      default:
        this.render(400);
        break;
    }
  }

  async addBeerRelation(beerToAdd) {
    
    const beers = await this.user.getBeers();

    let validated = false;
    if ( !this.hasExisting(beers, beerToAdd) ) {
      validated = await Beer.find(beerToAdd.id);
      
      if (validated) {
        await this.user.addBeer(validated);
      } else {
        this.render(400);
      }
    }
    return await this.user.save();
  }

  async addRoleRelation(roleToAdd) {
    const roles = await this.user.getRoles();

    let validated = false;
    if ( !this.hasExisting(roles, roleToAdd) ) {
      validated = await Role.find(roleToAdd.id);
      if (validated) {
        await this.user.addRole(validated);
      }
    }
    return await this.user.save();
  }

}