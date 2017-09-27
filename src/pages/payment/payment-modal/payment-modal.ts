import { Component } from '@angular/core';
import { BTProvider } from '../../../providers/braintree';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-modal',
  templateUrl: 'payment-modal.html',
})
export class PaymentModalPage {
  param: any;

  constructor(public viewCtrl: ViewController, params: NavParams, public braintree: BTProvider) {
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
                    } else {
                      console.log("Error " + data.msg)
                    }
                    this.viewCtrl.dismiss();
                  })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
