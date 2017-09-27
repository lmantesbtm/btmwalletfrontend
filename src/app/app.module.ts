import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { InvestmentLedgerPage } from '../pages/investment-ledger/investment-ledger';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { TabsPage } from '../pages/tabs/tabs';

import { PaymentWithdrawalPage } from '../pages/payment/payment-withdrawal/payment-withdrawal';
import { PaymentResponsePage } from '../pages/payment/payment-response/payment-response';
import { PaymentDepositPage } from '../pages/payment/payment-deposit/payment-deposit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BTProvider } from '../providers/braintree';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PaymentPage,
    InvestmentLedgerPage,
    TransactionHistoryPage,
    PaymentWithdrawalPage,
    PaymentResponsePage,
    PaymentDepositPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PaymentPage,
    InvestmentLedgerPage,
    TransactionHistoryPage,
    PaymentResponsePage,
    PaymentDepositPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BTProvider
  ]
})
export class AppModule {}
