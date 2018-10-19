import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';
// import { AlertController} from "@ionic/angular";
import { SiteDataProvider } from "../../providers/site-data/site-data";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(//public navCtrl: NavController,
              private siteData: SiteDataProvider,
              public alertCtrl: AlertController) {
  }

  siteName = this.siteData.siteName;

  async shareNow() {
    const alert = await this.alertCtrl.create({
      title: 'LOCATION',
      subTitle: 'Connection',
      message: '""https://www.thebestworst.com" Would Like To Use Your Current Location',
      buttons: [
        {
          text: 'Don\'t Allow',
          role: 'cancel',

          handler: () => {
            console.log('You said cancel this');
          }
        },
        {
          text:'OK',
          handler: () => {
            console.log('Ok Great!!');
          }
        }
      ]
    });
    return await alert.present();
  }

}
