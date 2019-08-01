import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthDetailPage } from './month-detail';

@NgModule({
  declarations: [
    MonthDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthDetailPage),
  ],
})
export class MonthDetailPageModule {}
