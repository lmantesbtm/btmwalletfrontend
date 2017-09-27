import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ChartsPage } from '../charts/charts';
import { PaymentPage } from '../payment/payment';
import { InvestmentLedgerPage } from '../investment-ledger/investment-ledger';
import { TransactionHistoryPage } from '../transaction-history/transaction-history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChartsPage;
  tab2Root = PaymentPage;
  tab3Root = ContactPage;

  tabDeposit = {page: "Deposit"};
  tabWithdraw = {page: "Withdraw"}

  constructor() {

  }
}
