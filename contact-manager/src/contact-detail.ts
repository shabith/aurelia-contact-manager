import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {ContactUpdated, ContactViewed, ContactSaved, ContactDelete} from './messages';
import {areEqual} from './utility';
import {Contact} from './IContact'; 

@inject(WebAPI, EventAggregator, Router)
export class ContactDetail {
  routeConfig;
  contact: Contact;
  originalContact: Contact;

  constructor(private api: WebAPI, private ea: EventAggregator, private router:Router) { }

  activate(params, routeConfig, c, d) {
    this.routeConfig = routeConfig; console.log(c, d);

    if(this.routeConfig.name !== 'new-contact') {
      return this.api.getContactDetails(params.id).then(contact => {
        this.contact = <Contact>contact;
        this.routeConfig.navModel.setTitle(this.contact.firstName);
        this.originalContact = JSON.parse(JSON.stringify(this.contact));
        this.ea.publish(new ContactViewed(this.contact));
      });
    }else{
      this.contact = <Contact>{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      }
      this.routeConfig.navModel.setTitle('Create Contact');
      this.originalContact = JSON.parse(JSON.stringify(this.contact));
      
    }

    
  }

  get canSave() {
    return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
  }

  get canDelete() {
    return this.contact.id!!;
  }

  delete() {
    this.ea.publish(new ContactDelete(this.contact));
  }

  save() {
    if(this.routeConfig.name == 'new-contact') {
      if(this.contact.firstName && this.contact.lastName && this.contact.phoneNumber && this.contact.email) {
        this.api.saveContact(this.contact).then(data => {
          this.contact.id = data.id;
          this.originalContact = JSON.parse(JSON.stringify(this.contact));
          this.ea.publish(new ContactSaved(this.contact));
          this.router.navigate('contact/' + this.contact.id);
        });
      }else{
        alert('Please provide all fields.');
      }
    }else{
      this.api.updateContact(this.contact).then(contact => {
        this.contact = <Contact>contact;
        this.routeConfig.navModel.setTitle(this.contact.firstName);
        this.originalContact = JSON.parse(JSON.stringify(this.contact));
        console.log(this.contact);
        this.ea.publish(new ContactUpdated(this.contact));
      });
    }
  }

  canDeactivate() {
    if(!areEqual(this.originalContact, this.contact)) {
      let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

      if(!result) {
        this.ea.publish(new ContactViewed(this.contact));
      }

      return result;
    }

    return true;
  }
}
