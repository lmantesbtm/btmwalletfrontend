import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginVerifyPage } from '../login-verify/login-verify';
import { LoginPinPage } from '../login-pin/login-pin';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  forgetPassword() {
    this.navCtrl.push(LoginVerifyPage);
  }

  login() {
    this.navCtrl.push(LoginPinPage)
  }
}
