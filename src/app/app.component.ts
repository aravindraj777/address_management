import { Component } from '@angular/core';
import {  FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  reisterAddress:FormGroup
  // obj={
  //   name:'',
  //   email:'',
  //   addresses:[
  //     {
  //       cityName:'',
  //       stateName:'',
  //       streetName:'',
  //       landMark:''

  //     }
  //   ]
  // }

  constructor(){
    this.reisterAddress = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      addresses: new FormArray([
        new FormGroup({
          cityName:new FormControl(),
          stateName:new FormControl(''),
          streetName:new FormControl(''),
          landMark:new FormControl('')

        })
      ])
    })
  }

  
}
