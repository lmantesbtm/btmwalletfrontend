import { Component, Input, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

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

  text: string;

  constructor(public navParams: NavParams) {
    console.log('Hello LoginLogoComponent Component');
  }

  ngAfterViewChecked() {
    this.setActivePage()
    this.remSpace = this.isRegister()
    if (this.remSpace) {
      this.addSpace = false;
    }
  }

  setActivePage() {
    this.activePage = this.page.nativeElement.innerText
  }

  isRegister(): boolean {
    if (this.activePage.indexOf('register') >= 0) {
      return true;
    }
    if (this.activePage.indexOf('pin') >= 0) {
      return true;
    }
    return false;
  }

  setClass(){
    let classes = {
      remove_space_top: this.remSpace,
      add_space_top: this.addSpace,
    }
    return classes
  }
}
