import ApplicationAction from '../application';
import Role from '../../models/role';

export default class ShowRole extends ApplicationAction {

  async respond({ params }) {
    return await Role.find(params.id);
  }

}
