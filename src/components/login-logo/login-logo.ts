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
  private activePage: string;

  text: string;

  constructor(public navParams: NavParams) {
    console.log('Hello LoginLogoComponent Component');
  }

  ngAfterViewInit() {
    // look through current page
    this.activePage = this.page.nativeElement.innerText
  }

  setClass(){
    let classes = {
      remove_space_top: this.isRegister(),
      add_space_top: this.isRegister(),
    }
    return classes
  }
}
