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
      backgroundColor:'#40C5F2',
      borderColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#FF6E6E',
      pointHoverBorderColor: 'rgba(255,255,255,0.5)',
      spanGaps: false,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 6,
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
      data: [140, 158, 178, 246, 237, 231, 200, 180, 150, 170, 180, 161, 156, 137, 190, 170, 150, 59, 80, 67, 56, 55, 30, 180, 65, 9, 80, 81, 56, 64, 90, 10],
      label: '',
    }]
  }

  week() {
    this.lineChartData = [{
      data: [140, 135, 120, 100, 110, 90, 120, 155, 157, 157, 168, 181, 156, 175, 190, 185],
      label: '',
    }]
  }

  month() {
    this.lineChartData = [{
      data: [140, 159, 180, 111, 156, 155, 130, 180, 165, 149, 180, 185, 166, 185, 190, 186],
      label: '',
    }]
  }

  sixmonths() {
    this.lineChartData = [{
      data: [140, 156, 145, 135, 156, 155, 130, 180, 165, 174, 180, 181, 176, 165, 180, 200],
      label: '',
    }]
  }

  year() {
    this.lineChartData = [{
      data: [140, 159, 180, 170, 156, 155, 140, 180, 165, 190, 180, 171, 156, 155, 170, 190],
      label: '',
    }]
  }

  all() {
    this.lineChartData = [{
      data: [140, 146, 150, 155, 156, 158, 162, 165, 168, 170, 180, 185, 192, 197, 200, 230],
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
