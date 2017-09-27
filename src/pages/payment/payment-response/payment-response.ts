import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-payment-response',
  templateUrl: 'payment-response.html',
})

export class PaymentResponsePage {
  message: any;
  private url: string;
  private resp_msg: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) {
    this.message = params.get("success");
    if (this.message){
      this.message = "successful"
      this.resp_msg = "Payment Successful"
    } else {
      this.message = "fail"
      this.resp_msg = "Payment Fail"
    }
    this.url = "assets/images/" + this.message + ".png"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentResponsePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
