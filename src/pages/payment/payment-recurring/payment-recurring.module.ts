import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentRecurringPage } from './payment-recurring';

@NgModule({
  declarations: [
    PaymentRecurringPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentRecurringPage),
  ],
})
export class PaymentRecurringPageModule {}
