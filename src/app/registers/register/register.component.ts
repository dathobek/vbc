import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../Shared/register.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public registerService: RegisterService,private tostr: ToastrService) { 
   
  }

  ngOnInit() {
    this.registerService.getData();
    this.resetForm();
  }

  onSubmit(registerForm : NgForm){
    if(registerForm.value.$key == null)
     this.registerService.insertData(registerForm.value) ;
     else
     this.registerService.updateData(registerForm.value) ;
     this.resetForm(registerForm); 
     this.tostr.success('Successfully Submitted','Employee Details')

       }

  resetForm(registerForm? : NgForm){
    if(registerForm != null)
    registerForm.reset();
    this.registerService.selectedregister = {
       $key : null,
       name : '',
       address : '',
       gender : '',
       PhoneNumber : 0,
       daysAttended: []

    }

       }    
       
  

}
