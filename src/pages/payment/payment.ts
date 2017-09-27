import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  rootPage: any;
  pageName: string;
  deposit: boolean;
  withdraw: boolean;
  title: string;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public params: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    console.log("PAGE : " + this.getActivePage())

    this.title = this.getActivePage();
    if(this.title.indexOf('Deposit') != -1){
      this.deposit = true;
      this.withdraw = false;
    } else {
      this.deposit = false;
      this.withdraw = true;
    }
  }

  getActivePage(): string {
    return this.params.get("page")
  }

  /*
  openPaymentModal() {
    let data = {value:100}
    this.openModal("PaymentModalPage", data);
  }

  openModal(pageName, value) {
    this.modalCtrl.create(pageName, value, { cssClass: 'inset-modal' })
                  .present();
  }
  */
}
