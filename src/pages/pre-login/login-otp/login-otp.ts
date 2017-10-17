import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { LoginSetPasswordPage} from '../login-set-password/login-set-password';

@IonicPage()
@Component({
  selector: 'page-login-otp',
  templateUrl: 'login-otp.html',
})
export class LoginOtpPage {
  btnContent: string;
  header: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    if (this.isPassword()) {
      this.header = "One Time Password"
      this.btnContent = "I am Done"
    } else {
      this.header = "Enter One Time Passcode Here"
      this.btnContent = "Reset Password"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOtpPage');
  }

  setPassword() {
    this.navCtrl.push(LoginSetPasswordPage);
  }

  private isPassword(): boolean {
    //return this.navParams.get("isPassword")
    return true;
  }
}
