import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from './login/login';

@IonicPage()
@Component({
  selector: 'page-pre-login',
  templateUrl: 'pre-login.html',
})

export class PreLoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreLoginPage');
    this.menuCtrl.enable(false, 'sideMenu');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
}
