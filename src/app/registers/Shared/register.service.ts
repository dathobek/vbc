import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Register } from './register.model';
import * as firebase from 'firebase';

@Injectable()
export class RegisterService {

  registerlist: AngularFireList<any>;
  selectedregister: Register = new Register();

  constructor(public firebase: AngularFireDatabase) { }

  getData(){
    this.registerlist = this.firebase.list('Registered User');
    return this.registerlist;
  }


  //putting data into FireBase database


  insertData(register: Register){
    this.registerlist.push({
      name: register.name,
      address: register.address,
      gender: register.gender,
      PhoneNumber: register.PhoneNumber
    });
  }

  //Updating data to FireBase Database

  updateData( register) {
    // console.log(register)
    this.registerlist.update(register.$key,
      {
        name:  register.name,
        address:  register.address,
        gender:  register.gender,
        PhoneNumber:  register.PhoneNumber,
        daysAttended: register.daysAttended
    });
  }


  //Delete Data From FireBase Database


  deleteData($key: string){
    this.registerlist.remove($key)
  }

  
}

