import { Component, OnInit } from '@angular/core';
import {RegisterService } from './Shared/register.service'

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css'],
  providers:[RegisterService]
})
export class RegistersComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

}
