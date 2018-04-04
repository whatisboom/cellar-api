import ApplicationAction from '../application';
import Role from '../../models/role';

export default class ListRoles extends ApplicationAction {

  async respond() {
    return await Role.all();
  }

}
