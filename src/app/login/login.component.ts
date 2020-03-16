import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup;
  email = new FormControl(null, [Validators.required, Validators.email]);
  password = new FormControl(null, [Validators.required]);
  
  signForm: FormGroup;
  signEmail = new FormControl(null, [Validators.required, Validators.email]);
  signPassword = new FormControl(null, [Validators.required]);
  signUser = new FormControl(null, [Validators.required]);
  
  constructor(formBuilder: FormBuilder, private loginService: LoginService,
    private dialog: MatDialog, private router: Router) {
    this.loginForm = formBuilder.group({
      email: this.email,
      password: this.password
    });

    this.signForm = formBuilder.group({
      signEmail: this.signEmail,
      signPassword: this.signPassword,
      signUser: this.signUser    
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
        if (res.token && res.msg) {
          localStorage.setItem('token', res.token);
          this.openDialog(res.msg);
        }
        console.log(res);
      },
        err => {
          debugger;
          console.log(err);
        });
    }
  }

  private openDialog(message: string): void {
    const dialogRef = this.dialog.open(NotificationComponent, {
      width: '460px',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.router.navigate(['/home'])
    });
  }
}
