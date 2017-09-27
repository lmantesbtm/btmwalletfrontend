import { Component } from '@angular/core';
import { BTProvider } from '../../../providers/braintree';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';

import { PaymentResponsePage } from '../payment-response/payment-response';

@IonicPage()
@Component({
  selector: 'page-payment-modal',
  templateUrl: 'payment-modal.html',
})
export class PaymentModalPage {
  param: any;
  success: boolean;

  constructor(public viewCtrl: ViewController, params: NavParams, public navCtrl: NavController, public braintree: BTProvider) {
    this.param = params.get('value');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentModalPage');
    this.braintree.loadDropin();
  }

  ngAfterViewInit() {

  }

  checkOut() {
    this.braintree.checkOut()//.then((data) => console.log(data))
                  .then(data => {
                    if (data.success) {
                      console.log("Transaction " + data.success)
                      this.success = true;
                    } else {
                      console.log("Error " + data.msg)
                      this.success = false;
                    }
                    this.navCtrl.push(PaymentResponsePage, {success:this.success})
                    this.viewCtrl.dismiss();
                  })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
