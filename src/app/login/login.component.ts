import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
        if (res.token && res.msg) {
          localStorage.setItem('token', res.token);
          this.openDialog({ message: res.msg, title: 'Welcome to My Manhua List!' }).subscribe(res => {
            this.router.navigate(['/home']);
          });
        }
        console.log(res);
      },
        err => {
          this.openDialog({ message: err.error.msg, title: "Sorry, but an error has occured." }).subscribe(res => {
          });
        });
    }
  }

  private openDialog(data: any): Observable<any> {
    const dialogRef = this.dialog.open(NotificationComponent, {
      width: '460px',
      data: data
    });

    return dialogRef.afterClosed();
  }

  public onSignUp(): void {
    debugger;
    let username = this.signForm.controls.signUser.value;
    let email = this.signForm.controls.signEmail.value;
    let password = this.signForm.controls.signPassword.value;

    this.loginService.addUser(username, password, email).subscribe(res => {
      if (res.msg) {
        this.openDialog({ message: res.msg, title: "We're glad to have you here." }).subscribe(res => {
          this.loginService.login(username, password).subscribe(res => {
            this.router.navigate(['/home']);
          })

        });

      }
    },
      err => {
        debugger;
        if (err.error) {
          this.openDialog({ message: err.error.msg, title: "Sorry, an error has occurred :(", error: true }).subscribe(res => { });
        }
      });
  }
}
