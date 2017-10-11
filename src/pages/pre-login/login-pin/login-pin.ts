import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginOtpPage} from '../login-otp/login-otp';
import { ChartsPage } from '../../charts/charts';

@IonicPage()
@Component({
  selector: 'page-login-pin',
  templateUrl: 'login-pin.html',
})
export class LoginPinPage {

  pinPage = {isPassword:false}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPinPage');
  }

  forgotPin() {
    this.navCtrl.push(LoginOtpPage, this.pinPage)
  }

  mainScreen() {
    this.navCtrl.setRoot(ChartsPage);
  }
}
