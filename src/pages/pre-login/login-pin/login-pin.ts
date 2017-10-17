import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginOtpPage} from '../login-otp/login-otp';
import { LoginForgotPinPage } from '../login-forgot-pin/login-forgot-pin';
import { ChartsPage } from '../../charts/charts';

@IonicPage()
@Component({
  selector: 'page-login-pin',
  templateUrl: 'login-pin.html',
})
export class LoginPinPage {

  prevPage: string;
  pinPage = {isPassword:false}
  pin_1:Array<number> = [];
  pin_2:Array<number> = [];
  pin_label_arr: Array<string> = ["SELECT PIN", "CONFIRM PIN AGAIN"];
  pin_label: string;
  count: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setPinLabel(this.count)
    // set which pin css design to use
    this.prevPage =  this.getPrevPage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPinPage');
  }

  forgotPin() {
    this.navCtrl.push(LoginForgotPinPage, this.pinPage)
  }

  mainScreen() {
    this.navCtrl.setRoot(ChartsPage);
  }

  getPrevPage() {
    return this.navParams.get("prevPage")
  }

  setPinLabel(count: number) {
    if (this.getPrevPage().indexOf('register') >= 0) {
      this.pin_label = this.pin_label_arr[count]
    }
  }

  inputPin(pinCode: number) {
    if (this.count == 0) {
      this.pin_1.push(pinCode)
      if (this.pin_1.length == 4) {
        this.count = 1
        this.setPinLabel(this.count)
      }
    } else {
      this.pin_2.push(pinCode)

      if (this.pin_2.length == this.pin_1.length) {
        for (let i = this.pin_1.length; i--;) {
          if (this.pin_1[i] !== this.pin_2[i]){
            console.log("Pin Code does not match")
          } else {
            this.prevPage = 'login'
            this.navCtrl.setRoot(LoginPinPage, {prevPage: 'login'})
          }
        }
      }
    }

  }
}
