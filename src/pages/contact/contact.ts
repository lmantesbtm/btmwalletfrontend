import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChartsPage } from '../charts/charts';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';

@Component({
  selector: 'page-home',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

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
  values = {
    LHR: {
      valueA: 52,
      price: 20
    },
    MHR: {
      valueA: 40,
      price: 30
    },
    HHR: {
      valueA: 90,
      price: 300
    }
  }

  value: number = 0
  price: number = 0

  ionViewDidLoad() {
    this.LHR()
    this.day()
  }

  CPage() {this.navCtrl.push(ChartsPage)}

  day() {
    this.lineChartData = [{
      data: [5, 59, 80, 300, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 10, 5, 59, 80, 1, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 10],
      label: '',
    }]
  }

  week() {
    this.lineChartData = [{
      data: [5, 59, 80, 1, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 20],
      label: '',
    }]
  }

  month() {
    this.lineChartData = [{
      data: [5, 59, 80, 1, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 100],
      label: '',
    }]
  }

  sixmonths() {
    this.lineChartData = [{
      data: [5, 59, 80, 1, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 200],
      label: '',
    }]
  }

  year() {
    this.lineChartData = [{
      data: [5, 59, 80, 20, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 2000],
      label: '',
    }]
  }

  all() {
    this.lineChartData = [{
      data: [5, 59, 80, 20, 56, 55, 30, 180, 65, 9, 80, 81, 56, 5, 90, 5000],
      label: '',
    }]
  }



  LHR() {
    console.log(this.values)
    this.value = this.values.LHR.valueA
    this.price = this.values.LHR.price
  }

  MRC() {
    this.value = this.values.MHR.valueA
    this.price = this.values.MHR.price
  }


  HRC() {
    this.value = this.values.HHR.valueA
    this.price = this.values.HHR.price
  }






}
