import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SiteDataProvider} from "../../providers/site-data/site-data";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private siteData: SiteDataProvider) {
  }

  siteName = this.siteData.siteName;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
