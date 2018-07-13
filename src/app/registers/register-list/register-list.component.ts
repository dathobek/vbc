import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../Shared/register.service';
import { Register } from '../Shared/register.model';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {

  registerlist: Register[];
  days: any[];
  constructor(public registerService: RegisterService ) { }

  ngOnInit() {
    var x = this.registerService.getData();
   x.snapshotChanges().subscribe(item => {
     this.registerlist = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
      this.registerlist.push(y as Register);
     });
   });
  }

  foo(userDetails, chosenDay) {
   if (userDetails.daysAttended) {
     const daysAttended = Object.values(userDetails.daysAttended).map(value => value);
    if (daysAttended.includes(chosenDay)) {
      const indexOfDay = daysAttended.indexOf(chosenDay);
      daysAttended.splice(indexOfDay, 1);
      userDetails.daysAttended = daysAttended;
    } else {
      daysAttended.push(chosenDay);
      userDetails.daysAttended = daysAttended;
    }
   } else {
     userDetails.daysAttended = [];
     const { daysAttended } = userDetails;
     daysAttended.push(chosenDay);
   }
   const days = Object.assign({}, userDetails.daysAttended);
   userDetails.daysAttended = days;
   this.registerService.updateData(userDetails);
   this.registerlist.map(user => user.$key === userDetails.$key && (user.daysAttended = days));
  }

  checkIfDayExists(register, day) {
    if (Object.keys(register.daysAttended !== undefined && register.daysAttended).length > 0) {
      return Object.values(register.daysAttended).map(value => value).includes(day);
    }
    return false;
  }
}
