import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HikeDetails } from './hike-details';

@NgModule({
  declarations: [
    HikeDetails,
  ],
  imports: [
    IonicPageModule.forChild(HikeDetails),
  ],
  exports: [
    HikeDetails
  ]
})
export class HikeDetailsModule {}
