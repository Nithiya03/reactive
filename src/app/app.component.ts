import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive';
  loginform = new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });
  loginUser(){
    console.warn(this.loginform.value);
  }

  get user(){
    return this.loginform.get('user');
  }

  get password(){
    return this.loginform.get('password');
  }
}
