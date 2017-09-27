import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})

export class ChartsPage {
  img: string;
  risk: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = 'assets/images/coin-01.png'
    this.risk = 'LOW RISK INVESTMENT PRICE';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

}
