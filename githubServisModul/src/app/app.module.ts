import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { UsersPage } from '../pages/users/users';
import { haritaPage } from '../pages/harita/harita';
import { UpdatePage } from '../pages/update/update';
import { MapsPage } from '../pages/maps/maps';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import { HttpModule } from '@angular/http';
import { DuraksaatPage } from '../pages/duraksaat/duraksaat';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    haritaPage,
    UpdatePage,
    MapsPage,
    DuraksaatPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    haritaPage,
    UpdatePage,
    MapsPage,
    DuraksaatPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider
  ]
})
export class AppModule {}
