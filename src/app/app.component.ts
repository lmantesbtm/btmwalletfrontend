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
import { ChartsPage } from '../pages/charts/charts';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('sidemenu') navCtrl: NavController;

  //rootPage:any = TabsPage;
  rootPage: any = ChartsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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
}
