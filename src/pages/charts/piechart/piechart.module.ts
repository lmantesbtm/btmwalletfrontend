import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PieChartPage } from './piechart';

@NgModule({
  declarations: [
    PieChartPage,
  ],
  imports: [
    IonicPageModule.forChild(PieChartPage),
  ],
})
export class PieChartPageModule {}
