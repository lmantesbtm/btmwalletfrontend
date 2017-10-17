import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginForgotPinPage } from './login-forgot-pin';

@NgModule({
  declarations: [
    LoginForgotPinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginForgotPinPage),
  ],
})
export class LoginForgotPinPageModule {}
