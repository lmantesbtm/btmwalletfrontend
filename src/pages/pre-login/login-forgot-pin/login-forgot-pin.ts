import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginOtpPage } from '../login-otp/login-otp';

@IonicPage()
@Component({
  selector: 'page-login-forgot-pin',
  templateUrl: 'login-forgot-pin.html',
})
export class LoginForgotPinPage {
  passPage = {isPassword:false}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginForgotPinPage');
  }

  verify() {
    this.navCtrl.push(LoginOtpPage, this.passPage);
  }
}
