import {HttpClient} from 'aurelia-fetch-client';
import {User} from './IUser';

let latency = 1200;
let id = 0;
let client = new HttpClient();

function getId(){
  return ++id;
}

let contacts = [];

export class WebAPI {
  isRequesting = false;
  
  getContactList(){

    this.isRequesting = true;

    return client.fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
          let results = data.users.map((x:User) => {
            return {
              id: x.rowid,
              firstName: x.fname,
              lastName: x.lname,
              phoneNumber: x.phone,
              email: x.email
            }
          });
          this.isRequesting = false;
          contacts = results;
          return results;
          
      });
  }

  getContactDetails(id){
    this.isRequesting = true;

    return client.fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(data => {
        let user = data.map((x:User) => {
          return {
            id: x.rowid,
            firstName: x.fname,
            lastName: x.lname,
            phoneNumber: x.phone,
            email: x.email
          }
        });
        this.isRequesting = false;
        return user[0];
      });
  }

  saveContact(contact){

      this.isRequesting = true;
      return client.fetch(`http://localhost:3000/users/new`, {
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let user = data.map((x:User) => {
          return {
            id: x.rowid,
            firstName: x.fname,
            lastName: x.lname,
            phoneNumber: x.phone,
            email: x.email
          }
        });
        contacts.push(user[0]);

        this.isRequesting = false;
        return user[0];
      })
    }


  updateContact(contact){
    this.isRequesting = true;
    return client.fetch(`http://localhost:3000/users/${contact.id}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
      let found = contacts.filter(x => x.id == data.id)[0];

      if(found) {
        let index = contacts.indexOf(found);
        contacts[index] = data;
      }
      let user = data.map((x:User) => {
          return {
            id: x.rowid,
            firstName: x.fname,
            lastName: x.lname,
            phoneNumber: x.phone,
            email: x.email
          }
        });
      this.isRequesting = false;
      return user[0];
    }); 
  }

  deleteContact(contact){
    this.isRequesting = true;

    return client.fetch(`http://localhost:3000/users/${contact.id}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
      let found = contacts.filter(x => x.id == data.id)[0];

      if(found) {
        let index = contacts.indexOf(found);
        if(index > -1) {
          contacts.splice(index, 1);
        }
      }
      this.isRequesting = false;
      return true;
    });
  }
}
