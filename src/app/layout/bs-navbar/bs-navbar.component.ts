import { Component } from '@angular/core';
import {SiteDataProvider} from "../../../providers/site-data/site-data";

/**
 * Generated class for the BsNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bs-navbar',
  templateUrl: 'bs-navbar.component.html',
})
export class BsNavbarComponent {

   constructor(private siteData: SiteDataProvider) {
  }

  siteName = this.siteData.siteName;

}
