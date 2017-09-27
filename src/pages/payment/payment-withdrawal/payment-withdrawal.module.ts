import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentWithdrawalPage } from './payment-withdrawal';

@NgModule({
  declarations: [
    PaymentWithdrawalPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentWithdrawalPage),
  ],
})
export class PaymentWithdrawalPageModule {}
