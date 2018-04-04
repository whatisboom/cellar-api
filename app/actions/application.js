import { Action } from '@denali-js/core';

export default class ApplicationAction extends Action {

  static before = ['authenticate'];

  protected = true;

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
}
