import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-piechart',
  templateUrl: 'piechart.html',
})
export class PieChartPage {
    count: number;
    pieData:number[][] = [[],[20, 30, 40, 5, 5], [32, 10, 20, 15, 5], [20, 4, 10, 3, 9]]
    riskDescription: Array<string> = ['','LOW', 'MEDIUM', 'HIGH']

    // Pie
    public pieChartLabels:string[] = ['Bitcoin', 'Ethereum', 'Monero', 'Lightcoin', 'Dash'];
    public pieChartData:number[];
    public pieChartType:string = 'pie';
    public options: any = {legend: {position: 'bottom'}}

    public risk: string = "";

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.populateChart();
    }

    ionViewDidLoad() {

    }

    populateChart() {
      this.count = this.navParams.get('count')
      this.pieChartData = this.pieData[this.count]
      this.risk = this.riskDescription[this.count]
    }

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
  }
