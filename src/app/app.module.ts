import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Landing } from '../pages/landing/landing';
import { Lobby } from '../pages/lobby/lobby';
import { Hikes } from '../pages/hikes/hikes';
import { HikeDetails } from '../pages/hike-details/hike-details';
import { SearchHike } from '../pages/search-hike/search-hike';

import { AppUser } from '../providers/app-user';
import { Data } from '../providers/data';

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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser,
    Data
  ]
})
export class AppModule {}
