import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginOtpPage } from '../login-otp/login-otp';

@IonicPage()
@Component({
  selector: 'page-login-verify',
  templateUrl: 'login-verify.html',
})
export class LoginVerifyPage {
  passPage = {isPassword:true}
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginVerifyPage');
  }

  verify() {
    this.navCtrl.push(LoginOtpPage, this.passPage);
  }
}
