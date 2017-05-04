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

import { AppUser } from '../providers/app-user';

let injections: any[] = [
  MyApp,
  Landing,
  Login,
  Lobby,
  Register
  ]

@NgModule({
  declarations: [
    MyApp,
    Register,
    Login,
    Landing,
    Lobby,
    Register
  ],
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
    AppUser
  ]
})
export class AppModule {}
