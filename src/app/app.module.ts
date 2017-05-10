import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Landing } from '../pages/landing/landing';
import { Lobby } from '../pages/lobby/lobby';
import { Hikes } from '../pages/hikes/hikes';
import { HikeDetails } from '../pages/hike-details/hike-details';
import { SearchHike } from '../pages/search-hike/search-hike';


import { IonicStorageModule } from '@ionic/storage';
import { AppUser } from '../providers/app-user';
import { Data } from '../providers/data';
import { Grabhikes } from '../providers/grabhikes';
import { HikeResults } from '../providers/hike-results';

let injections: any[] = [
  MyApp,
  Landing,
  Login,
  Lobby,
  Register,
  Hikes,
  SearchHike,
  HikeDetails
  ];

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser,
    Data,
    Grabhikes,
    HikeResults
  ]
})
export class AppModule {}
