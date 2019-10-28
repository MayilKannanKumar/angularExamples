import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.css']
})
export class InputUserDataFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm = FormGroup; 

  constructor(private formBuilder : FormBuilder) {
    
   }

  ngOnInit() {
  }

}
