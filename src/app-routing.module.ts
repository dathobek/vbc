import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/Router';
import { RegisterListComponent } from './app/registers/register-list/register-list.component';
import { RegisterComponent } from './app/registers/register/register.component';


const routes : Routes=[
   {path: '', component: RegisterComponent},
   {path: 'registerlist', component: RegisterListComponent},
   {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})


export class AppRoutingModule { }
