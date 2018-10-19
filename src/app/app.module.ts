import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { Platform } from "@ionic/angular";

import { MyApp } from './app.component';
import { BsNavbarComponent } from './layout/bs-navbar/bs-navbar.component';
import { BsFooterComponent } from './layout/bs-footer/bs-footer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppRoutingModule } from "./app-routing.module";
import { AppAuthRoutingModule } from "../components/app-auth-routing.module";

import { SiteDataProvider } from '../providers/site-data/site-data';
import { ToastService } from "../providers/toast-service/toast-service";
import { ConnectionService } from '../providers/connection-service/connection-service';
import { AuthProvider } from '../providers/auth/auth';
import { GooglePlus } from "@ionic-native/google-plus";


@NgModule({
  declarations: [
    MyApp,
    BsNavbarComponent,
    BsFooterComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AppRoutingModule,
    AppAuthRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BsNavbarComponent,
    BsFooterComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteDataProvider,
    ToastService,
    ConnectionService,
    Geolocation,
    GooglePlus,
    AuthProvider,
    Platform
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
