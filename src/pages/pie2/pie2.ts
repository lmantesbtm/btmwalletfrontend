import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pie2',
  templateUrl: 'pie2.html',
})
export class Pie2Page {
    count: number;
    pieData:number[][] = [[],[20, 30, 40, 5, 5], [5, 30, 20, 1, 5], [20, 40, 10, 3, 9]]
    // Pie
    public pieChartLabels:string[] = ['Bitcoin', 'Ethereum', 'Monero', 'Lightcoin', 'Dash'];
    public pieChartData:number[] = [20, 30, 40, 5, 5];
    public pieChartType:string = 'pie';

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.count = this.navParams.get('count')

      console.log()
    }

    ionViewDidLoad() {
      
    }
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
  }
