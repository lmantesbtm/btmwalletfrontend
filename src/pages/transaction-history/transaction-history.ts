import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-transaction-history',
  templateUrl: 'transaction-history.html',
})
export class TransactionHistoryPage {
  public activeLabel: number = 1;
  public invLabel: string;
  public listData: any;
  public objKeys: any;
  public labelArr: Array<string> = ['', "investment", "deposit", "withdraw"]

  public data: any = {
    investment : [{
        date: '01/29/17',
        tx_id: '0030-abkd',
        inv_label: 'Medium',
        coin: 2,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        inv_label: 'High',
        coin: 6,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        inv_label: 'Low',
        coin: 7,
      }],
    deposit : [{
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 12,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 15,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 8,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 19,
      }],
    withdraw : [{
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 10
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 5,
      }, {
        date: '01/29/17',
        tx_id: '0030-abkd',
        bank: 'CIMB BANK',
        amount: 23,
      }],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHistoryPage');
  }

  ionViewWillEnter() {
    this.objKeys = Object.keys(this.data)
    this.listData = this.showTxHistory(this.activeLabel);
  }

  setActive(active: number) {
    if (this.activeLabel == active) {
      this.activeLabel = 0
    } else {
      this.activeLabel = active
      this.listData = this.showTxHistory(active);
    }
  }

  showTxHistory(index: number) {
    let data;
    let idx = index
    data = this.data[this.labelArr[idx]]
    this.invLabel = this.labelArr[idx]
    return data;
  }
}
