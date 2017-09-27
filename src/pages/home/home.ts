import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BTProvider } from '../../providers/braintree';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private message = {};
  private errorMessage = '';

  constructor(public navCtrl: NavController, public braintree:BTProvider) {

  }

  ionViewDidLoad() {
    //this.braintree.loadDropin();
  }
  /*
  checkout() {
    this.braintree.makeTransaction()
        .subscribe(
          data => console.log(data)
        )

    this.braintree.getPayload()
        .subscribe(
          data => console.log(data)
        )

        /*
        .catch(
          error => console.log('error ' + error)
        );
  }
  */


}
