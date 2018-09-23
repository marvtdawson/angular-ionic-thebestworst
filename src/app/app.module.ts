import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BsNavbarComponent } from './layout/bs-navbar/bs-navbar.component';
import { BsFooterComponent } from './layout/bs-footer/bs-footer';
import { HomePage } from '../pages/home/home';
import { AboutComponent } from '../pages/about/about.component';
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppRoutingModule } from "./app-routing.module";
import { AppAuthRoutingModule } from "../components/app-auth-routing.module";
import { SiteDataProvider } from '../providers/site-data/site-data';
import { ToastService } from "../providers/toast-service/toast-service";
import { ConnectionService } from '../providers/connection-service/connection-service';
import { GeoTestPage } from "../pages/geo-test/geo-test";
import {Geolocation} from "@ionic-native/geolocation";


@NgModule({
  declarations: [
    MyApp,
    BsNavbarComponent,
    BsFooterComponent,
    HomePage,
    AboutComponent,
    LoginPage,
    RegisterPage,
    GeoTestPage
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
    AboutComponent,
    RegisterPage,
    LoginPage,
    GeoTestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteDataProvider,
    ToastService,
    ConnectionService,
    Geolocation
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
