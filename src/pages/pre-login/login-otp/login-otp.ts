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
      this.header = "ONE TIME PASSWORD"
      this.btnContent = "CONFIRM"
    } else {
      this.header = "ENTER ONE TIME PIN"
      this.btnContent = "CONFIRM"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOtpPage');
  }

  setPassword() {
    this.navCtrl.push(LoginSetPasswordPage);
  }

  private isPassword(): boolean {
    return this.navParams.get("isPassword")
  }
}
