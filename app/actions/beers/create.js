import ApplicationAction from '../application';
import Beer from '../../models/beer';

export default class CreateBeer extends ApplicationAction {

  async respond({ body }) {
    let beer = await Beer.create(body);
    this.render(201, beer);
  }

}
