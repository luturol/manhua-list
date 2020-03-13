import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from './guards/auth-guard.service';

const appRoutes: Routes = [  
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]}  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers:[AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutinModule { }
