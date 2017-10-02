import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSetPasswordPage } from './login-set-password';

@NgModule({
  declarations: [
    LoginSetPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSetPasswordPage),
  ],
})
export class LoginSetPasswordPageModule {}
