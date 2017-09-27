import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentResponsePage } from './payment-response';

@NgModule({
  declarations: [
    PaymentResponsePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentResponsePage),
  ],
  exports: [
    PaymentResponsePage
  ]
})
export class PaymentResponsePageModule {}
