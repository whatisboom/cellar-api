import ApplicationAction from '../application';
import Role from '../../models/role';

export default class CreateRole extends ApplicationAction {

  async respond({ body }) {
    let role = await Role.create(body);
    this.render(201, role);
  }

}
