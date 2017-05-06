import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hikes } from './hikes';

@NgModule({
  declarations: [
    Hikes,
  ],
  imports: [
    IonicPageModule.forChild(Hikes),
  ],
  exports: [
    Hikes
  ]
})
export class HikesModule {}
