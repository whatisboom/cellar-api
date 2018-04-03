import ApplicationAction from '../application';
import Beer from '../../models/beer';

export default class ShowBeer extends ApplicationAction {

  async respond({ params }) {
    return await Beer.find(params.id);
  }

}
