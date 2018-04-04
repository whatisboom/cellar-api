import { castArray, compact } from 'lodash';
import { Action } from '@denali-js/core';

export default class ApplicationAction extends Action {

  static before = ['authenticate', 'canEdit'];

  protected = false;
  requiresOwnership = false;

  authenticate({ headers }) {
    if (this.protected) {
      if (!headers.authorization) {
        this.render(403, {
          error: 'Unauthorized'
        });
      } else {
        /*  
            decode JWT
            fetch users permission record
            check roles
        */
      }
    }
  }

  canEdit({headers}) {
    if (this.requiresOwnership) {
      if (!headers.authorization) {
        this.render(403, {
          error: 'Unauthorized'
        });
      } else {
        //isAdmin or owns record
        return;
      }
    }
  }

  hasExisting(collection, item) {
    return this.filterExisting(collection, item).length !== 0;
  }

  filterExisting(collection, item) {
    return collection.filter(existing => existing.id === item.id)
  }

  async validateRecords(Model, records) {
    const promises = castArray(records).map(recordToAdd => {
      return Model.find(recordToAdd.id);
    });

    /* eslint-disable-next-line no-undef */
    return compact(await Promise.all(promises));
  }

}
