import { Component } from '@angular/core';
import { IonicPage, AlertController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from "@ionic-native/geolocation";

/**
 * Generated class for the GeoTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geo-test',
  templateUrl: 'geo-test.html',
})
export class GeoTestPage {

  geoposition: Geoposition;
  geoLat: string;
  geoLong: string;

  pageTitle = 'GEO TEST';

  constructor(private platform: Platform,
              private geolocation: Geolocation,
              private alertCtrl: AlertController) {
  }


  async getGeoLatitude(getCoordinatePosition) {
    await this.platform.ready();
    this.geoposition = await this.geolocation.getCurrentPosition();
    const geoLat = this.geoposition.coords.latitude;
    if (getCoordinatePosition === 'geoLat') {
      const alert = this.alertCtrl.create({
        title: 'Your Latitude Location',
        subTitle: `${geoLat}`
      });
      alert.present();
    }
  }

  async getGeoLongitude(getCoordinatePosition) {
    await this.platform.ready();
    this.geoposition = await this.geolocation.getCurrentPosition();
    const geoLong = this.geoposition.coords.longitude;
    console.log(geoLong);
    if (getCoordinatePosition === 'geoLong') {
      const alertLat = this.alertCtrl.create({
        title: 'Your Longitude Location',
        subTitle: `${geoLong}`
      });
      alertLat.present();
    }
  }

}
