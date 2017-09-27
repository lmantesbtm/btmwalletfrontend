import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  rootPage: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
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
