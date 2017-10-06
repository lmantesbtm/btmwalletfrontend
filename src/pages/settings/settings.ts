import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentRecurringPage } from '../payment/payment-recurring/payment-recurring';
import { LoginSetPasswordPage } from '../pre-login/login-set-password/login-set-password';
import { LoginOtpPage } from '../pre-login/login-otp/login-otp';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  paymentDeposit(){
    this.navCtrl.push(PaymentRecurringPage);
  }
  changePin(){
    this.navCtrl.push(LoginOtpPage, {isPassword: false});
  }
  changePassword(){
    this.navCtrl.push(LoginSetPasswordPage);
  }
  changeQuestion(){
    this.navCtrl.push(PaymentRecurringPage);
  }
}
