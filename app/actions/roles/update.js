import ApplicationAction from '../application';
import Role from '../../models/role';

export default class UpdateRole extends ApplicationAction {

  async respond({ params, body }) {
    let role = await Role.find(params.id);
    Object.assign(role, body);
    return await role.save();
  }

}
