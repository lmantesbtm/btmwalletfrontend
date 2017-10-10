import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Config } from '../../../config';

@IonicPage()
@Component({
  selector: 'page-payment-deposit',
  templateUrl: 'payment-deposit.html',
})
export class PaymentDepositPage {
  payment: PayPalPayment = new PayPalPayment('10.10', 'USD', 'TV', 'sale');
	currencies = ['EUR', 'USD'];

	payPalEnvironment: string = 'PayPalEnvironmentSandbox';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private payPal: PayPal) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDepositPage');
  }

  makePayment() {
    this.payPal.init({
			PayPalEnvironmentProduction: Config.payPalEnvironmentProduction,
			PayPalEnvironmentSandbox: Config.payPalEnvironmentSandbox
		}).then(() => {
			this.payPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
				this.payPal.renderSinglePaymentUI(this.payment).then((response) => {
					alert(`Successfully paid. Status = ${response.response.state}`);
					console.log(response);
				}, () => {
					console.error('Error or render dialog closed without being successful');
				});
			}, () => {
				console.error('Error in configuration');
			});
		}, (error) => {
			//console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
      console.log(error);
		});
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
