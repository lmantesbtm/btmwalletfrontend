import { Component, Input, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'login-logo',
  templateUrl: 'login-logo.html'
})

export class LoginLogoComponent {
  @Input() pageName: string;
  @ViewChild('pagename') page;

  private addSpace: boolean = true;
  private remSpace: boolean = false;
  private activePage: string;
  private show: boolean = true;
  private hide: boolean = false;
  private fromReg: string;

  text: string;

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    console.log('Hello LoginLogoComponent Component');
  }

  ngAfterViewChecked() {
    this.setActivePage()
    // check if previous page is register
    if (this.activePage.indexOf('login') >= 0) {
      this.remSpace = true;
    }
    if (this.activePage.indexOf('register') >= 0) {
      this.hide = true;
      this.remSpace = false;
    }
  }

  setActivePage() {
    this.activePage = this.page.nativeElement.innerText
    console.log(this.activePage)
  }


  setClass(){
    let classes = {
      reduce_margin_top: this.remSpace,
    }
    return classes
  }

  setOdinClass() {
    let classes = {
      reduce_height: this.remSpace,
      hide_logo: this.hide,
    }
    return classes
  }
}
