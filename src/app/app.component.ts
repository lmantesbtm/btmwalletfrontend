import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { PreLoginPage } from '../pages/pre-login/pre-login'
import { InvestmentWalletPage } from '../pages/investment-wallet/investment-wallet';
import { InvestmentLedgerPage } from '../pages/investment-ledger/investment-ledger';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentModalPage } from '../pages/payment/payment-modal/payment-modal';
import { ChartsPage } from '../pages/charts/charts';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { ContactPage } from '../pages/contact/contact';
import { LoginPinPage } from '../pages/pre-login/login-pin/login-pin';
import { RegisterPage } from '../pages/register/register';
import { LoginVerifyPage } from '../pages/pre-login/login-verify/login-verify'
import { LoginPage } from '../pages/pre-login/login/login'
import { LoginSetPasswordPage } from '../pages/pre-login/login-set-password/login-set-password'
import { PieChartPage } from '../pages/charts/piechart/piechart';
import { LoginOtpPage } from '../pages/pre-login/login-otp/login-otp';

@Component({
  templateUrl: 'app.html'
})

export class Odin {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('sidemenu') navCtrl: NavController;

  //rootPage:any = TabsPage;
  rootPage: any = InvestmentLedgerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  settings(){
    this.navCtrl.push(SettingsPage)
  }
  profile(){
    this.navCtrl.push(ProfilePage)
  }
  wallet(){
    this.navCtrl.push(InvestmentWalletPage)
  }
  rewards(){
    this.navCtrl.push(ChartsPage)
  }
  ledger(){
    this.navCtrl.push(InvestmentLedgerPage)
  }
  buy(){
    this.navCtrl.push(PaymentPage, {page:"Deposit"})
  }
  withdraw(){
    this.navCtrl.push(PaymentPage, {page:"Withdraw"})
  }
  history(){
    this.navCtrl.push(TransactionHistoryPage)
  }
  support(){
    this.navCtrl.push(TransactionHistoryPage)
  }
  faq(){
    this.navCtrl.push(TransactionHistoryPage)
  }
  logout(){
    this.nav.setRoot(PreLoginPage)
  }
}
