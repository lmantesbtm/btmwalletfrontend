import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';
import { InvestmentLedgerPage } from '../investment-ledger/investment-ledger';
import { TransactionHistoryPage } from '../transaction-history/transaction-history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PaymentPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
