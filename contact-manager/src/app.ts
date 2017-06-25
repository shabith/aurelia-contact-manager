import { Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter( config: RouterConfiguration, router: Router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Select'},
      { route: 'contact/:id', moduleId: 'contact-detail', name: 'contacts'},
      { route: 'new', moduleId: 'contact-detail', name: 'new-contact'}
    ]);

    this.router = router;
  }

  addNew() {
    console.log('click');
    return true;
  }
}
