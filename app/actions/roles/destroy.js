import ApplicationAction from '../application';
import Role from '../../models/role';

export default class DestroyRole extends ApplicationAction {

  async respond({ params }) {
    let role = await Role.find(params.id);
    await role.delete();
    this.render(204);
  }

}
