import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactive';
  loginform!: FormGroup;
  constructor(){}
  ngOnInit(): void {
    this.loginform = new FormGroup({
      user:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      skill:new FormGroup({
        skillName: new FormControl(),
        experience:new FormControl()
      })
    });
  }
  loginUser(){ 
    console.warn(this.loginform.value);
    console.log(this.loginform.touched);
    console.log(this.loginform.value);

    console.log(this.loginform.dirty);
  }
  // addPhone(){
    
  get user(){
    return this.loginform.get('user');
  }

  get password(){
    return this.loginform.get('password');
  }
}
