import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/Router';


import { AppComponent } from './app.component';
import { RegistersComponent } from './registers/registers.component';
import { RegisterComponent } from './registers/register/register.component';
import { RegisterListComponent } from './registers/register-list/register-list.component';
import { RegisterService } from './registers/Shared/register.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistersComponent,
    RegisterComponent,
    RegisterListComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
