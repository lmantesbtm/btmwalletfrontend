import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentDepositPage } from './payment-deposit';

@NgModule({
  declarations: [
    PaymentDepositPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentDepositPage),
  ],
})
export class PaymentDepositPageModule {}
