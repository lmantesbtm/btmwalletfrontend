import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-investment-ledger',
  templateUrl: 'investment-ledger.html',
})

export class InvestmentLedgerPage {
  public activeLabel: number = 1;
  public date: string;
  public tx_id: string;
  public amount: number;
  public coin: number;
  public listData: any;
  public coinLabelArr: Array<string> = ['', "LRC", "MRC", "HRC"]
  public coinLabel: string;

  public data: any = {
    LRC : [{
        date: '01/29/17',
        tx_id: '0030-abkd',
        amount: 30.20,
        coin: 32,
      }, {
        date: '02/09/17',
        tx_id: '0031-abdd',
        amount: 10.42,
        coin: 20,
      }, {
        date: '05/16/17',
        tx_id: '0033-abvd',
        amount: 5.10,
        coin: 12,
      }],
    MRC : [{
        date: '03/02/17',
        tx_id: '1030-azkd',
        amount: 6.70,
        coin: 2,
      }, {
        date: '07/19/17',
        tx_id: '0151-abdd',
        amount: 16.82,
        coin: 25,
      }, {
        date: '05/15/17',
        tx_id: '0032-abvd',
        amount: 8.10,
        coin: 22,
      }, {
        date: '08/13/17',
        tx_id: '2032-abvd',
        amount: 54.10,
        coin: 45,
      }],
    HRC : [{
        date: '01/29/17',
        tx_id: '0130-apkz',
        amount: 36.27,
        coin: 6,
      }, {
        date: '12/29/17',
        tx_id: '0331-cddd',
        amount: 11.12,
        coin: 24,
      }, {
        date: '10/06/17',
        tx_id: 'za33-a3vd',
        amount: 8.80,
        coin: 15,
      }],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestmentLedgerPage');

  }

  ionViewWillEnter() {
    this.listData = this.showInvesment(this.activeLabel);
  }

  setActive(active: number) {
    if (this.activeLabel == active) {
      this.activeLabel = 0
    } else {
      this.activeLabel = active
      this.listData = this.showInvesment(active);
    }
  }

  showInvesment(index: number) {
    let data;
    let idx = index
    data = this.data[this.coinLabelArr[idx]]
    this.coinLabel = this.coinLabelArr[idx]
    return data;
  }

}
