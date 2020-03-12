import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl(null, [Validators.required, Validators.email]);
  password = new FormControl(null, [Validators.required]);
  hide = true;

  constructor(formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {

  }

  onSubmit() {
    let username = this.loginForm.controls.email.value;
    let password = this.loginForm.controls.password.value;

    if (username && password) {
      this.loginService.login(username, password).subscribe(res => {
        debugger;
        console.log(res);
      },
      err => {
        debugger;
        console.log(err);
      });
    }
  }
}
