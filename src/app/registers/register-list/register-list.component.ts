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

  constructor(private registerService: RegisterService ) { }

  ngOnInit() {
    var x = this.registerService.getData();
   x.snapshotChanges().subscribe(item => {
     this.registerlist = [];
     item.forEach(element => {
       var y = element.payload.toJSON();
       y["$key"] = element.key;
       this.registerlist.push(y as Register);
     });
   })
  }

  foo(){
    console.log('hey is it working');
  }

}
