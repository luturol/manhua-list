import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl(null, [Validators.required, Validators.email]);
  hide = true;
  password = new FormControl(null, [Validators.required]);

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email:  this.email,
      password: this.password
    });
   }

  ngOnInit() {
  }

  getErrorMessage(){

  }

  onSubmit(){

  }
}
