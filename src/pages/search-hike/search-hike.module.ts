import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHike } from './search-hike';

@NgModule({
  declarations: [
    SearchHike,
  ],
  imports: [
    IonicPageModule.forChild(SearchHike),
  ],
  exports: [
    SearchHike
  ]
})
export class SearchHikeModule {}
