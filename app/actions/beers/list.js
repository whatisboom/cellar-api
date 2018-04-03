import ApplicationAction from '../application';
import Beer from '../../models/beer';

export default class ListBeers extends ApplicationAction {

  async respond() {
    return await Beer.all();
  }

}
