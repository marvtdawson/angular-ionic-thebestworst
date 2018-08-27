import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SiteDataProvider} from "../../providers/site-data/site-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private siteData: SiteDataProvider) {
  }

  siteName = this.siteData.siteName;

}
