import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestmentWalletPage } from './investment-wallet';

@NgModule({
  declarations: [
    InvestmentWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestmentWalletPage),
  ],
})
export class InvestmentWalletPageModule {}
