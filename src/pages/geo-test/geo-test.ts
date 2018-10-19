import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from "@ionic-native/geolocation";

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

  constructor(private geolocation: Geolocation,
              private alertCtrl: AlertController) {
  }


  async getGeoLatitude(getCoordinatePosition) {
    this.geoposition = await this.geolocation.getCurrentPosition();
    const geoLat = this.geoposition.coords.latitude;
    console.log(geoLat);
    if (getCoordinatePosition === 'geoLat') {
      const alert = this.alertCtrl.create({
        title: 'Your Latitude Location',
        subTitle: `${geoLat}`
      });
      alert.present();
    }
  }

  async getGeoLongitude(getCoordinatePosition) {
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
