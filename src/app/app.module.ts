import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BsNavbarComponent } from '../app/layout/bs-navbar/bs-navbar';
import { BsFooterComponent } from '../app/layout/bs-footer/bs-footer';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppRoutingModule } from "./app-routing.module";
import { AppAuthRoutingModule } from "../components/app-auth-routing.module";

@NgModule({
  declarations: [
    MyApp,
    BsNavbarComponent,
    BsFooterComponent,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppRoutingModule,
    AppAuthRoutingModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BsNavbarComponent,
    BsFooterComponent,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
