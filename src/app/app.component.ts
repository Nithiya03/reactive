import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'reactive';
  isUserCreated:boolean = false;
  loginform!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      user:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  } 
  loginUser(){ 
    this.isUserCreated = true;
    console.warn(this.loginform.value);
  }

  // addPhone(){
    
  get user(){
    return this.loginform.get('user');
  }

  get password(){
    return this.loginform.get('password');
  }
}
