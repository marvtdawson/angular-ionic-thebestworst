import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AdminUsersComponent } from './auth/admin-users/admin-users';
import { RegisterComponent } from './auth/register/register';
import { LoginComponent } from './auth/login/login';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password';

const appAuthRoutes: Routes = [

  ];

@NgModule({
	declarations: [
    AdminUsersComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent],
	imports: [
    RouterModule.forRoot(appAuthRoutes)
  ],
	exports: [
    RouterModule,
    AdminUsersComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent]
})
export class AppAuthRoutingModule {}
