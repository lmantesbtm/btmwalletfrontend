import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartsPage } from '../charts/charts';

@Component({
  selector: 'page-home',
  templateUrl: 'contact.html'
})
export class ContactPage {
public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 90, 80, 65, 59, 80, 81, 56, 55, 90, 1000], label: ''},
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
public lineChartOptions:any = {
  responsive: true,
  scales: {
     xAxes: [
      {
          display: false
      }
    ],
     yAxes: [
        {
          display: false,
          ticks: {
                beginAtZero: true
            }
      }
  ]
  }
};
public lineChartColors:Array<any> = [
  { // grey
    backgroundColor:'#00FFFF',
    borderColor: 'rgba(0,0,0,0)',
    pointBackgroundColor: 'rgba(0,0,0,0)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    spanGaps: false,
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
  },

];
public lineChartLegend:boolean = false;
public lineChartType:string = 'line';


public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}






// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

  constructor(public navCtrl: NavController) {

  }

CPage() {this.navCtrl.push(ChartsPage)}

}
