import ApplicationAction from '../application';
import Beer from '../../models/beer';

export default class DestroyBeer extends ApplicationAction {

  async respond({ params }) {
    let beer = await Beer.find(params.id);
    await beer.delete();
    this.render(204);
  }

}
