import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../../pages/payment/payment'

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello NavbarComponent Component');
  }

  paymentPage() {
    let page = {page: "Deposit"}
    this.navCtrl.push(PaymentPage, page);
  }
}
