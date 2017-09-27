import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-deposit',
  templateUrl: 'payment-deposit.html',
})
export class PaymentDepositPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDepositPage');
  }

  openPaymentModal() {
    let data = {value:100}
    this.openModal("PaymentModalPage", data);
  }

  openModal(pageName, value) {
    this.modalCtrl.create(pageName, value, { cssClass: 'inset-modal' })
                  .present();
  }
}
