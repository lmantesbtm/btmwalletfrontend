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
  tapCount: number = 1;
  riskDescription: Array<string> = ['','LOW', 'MEDIUM', 'HIGH']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadScreen(this.tapCount);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

  changeMascot() {
    if(this.tapCount < 3) {
      this.tapCount += 1;
    } else {
      this.tapCount = 1;
    }
    this.loadScreen(this.tapCount)
  }

  loadScreen(count) {
    this.img = 'assets/images/coin-0'+ count + '.png'
    this.risk = this.riskDescription[count] + ' RISK INVESTMENT';
  }
}
