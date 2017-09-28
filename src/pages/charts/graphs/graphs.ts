import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@IonicPage()
@Component({
  selector: 'page-graphs',
  templateUrl: 'graphs.html',
})
export class GraphsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphsPage');
  }

  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 90, 1000], label: ''},
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public lineChartOptions:any = {
    responsive: true,
    scales: {
       xAxes: [
        {
            display: true
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
      backgroundColor: 'rgba(151,187,205,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
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


}