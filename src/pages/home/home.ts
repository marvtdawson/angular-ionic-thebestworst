import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
// import { AlertController} from "@ionic/angular";
import { SiteDataProvider } from "../../providers/site-data/site-data";

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
      subTitle: 'Connect',
      message: 'Do you grant The Best Work Xperience app the rights to access your device location?',
      buttons: ['No', 'OK']
    });
    return await alert.present();
  }

}
