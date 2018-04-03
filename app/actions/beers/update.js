import ApplicationAction from '../application';
import Beer from '../../models/beer';

export default class UpdateBeer extends ApplicationAction {

  async respond({ params, body }) {
    let beer = await Beer.find(params.id);
    Object.assign(beer, body);
    return await beer.save();
  }

}
