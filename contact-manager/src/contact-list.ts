import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import {ContactUpdated,  ContactViewed, ContactSaved, ContactDelete} from './messages';
import { inject } from 'aurelia-framework';

@inject(WebAPI, EventAggregator, Router)
export class ContactList {
  contacts;
  selectedId = 0;

  constructor(private api: WebAPI, private ea: EventAggregator, public router: Router) {
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      console.log(msg.contact);
      let id = msg.contact.id;
      let found = this.contacts.find(x => x.id == id);
      Object.assign(found, msg.contact);
    });
    ea.subscribe(ContactSaved, msg => {
      this.select(msg.contact);
    });
    ea.subscribe(ContactDelete, msg => {
      this.remove(msg.contact);
    })
  }

  created () {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }

  remove(contact) {
    let del = confirm('Are you sure you want to delete?');
    if(del) {
      this.api.deleteContact(contact)
      .then(row => {
        let found = this.contacts.filter(x => x.id == contact.id)[0];

        if(found) {
          let index = this.contacts.indexOf(found);
          if(index > -1) {
            this.contacts.splice(index, 1);
          }
        }
        if(this.contacts.length > 0) {
          this.selectedId = -1;
          this.router.navigate('/');
        }
      })

      return true;
    }else{
      return false;
    }
  }
}
