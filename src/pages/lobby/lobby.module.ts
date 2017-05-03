import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lobby } from './lobby';

@NgModule({
  declarations: [
    Lobby,
  ],
  imports: [
    IonicPageModule.forChild(Lobby),
  ],
  exports: [
    Lobby
  ]
})
export class LobbyModule {}
