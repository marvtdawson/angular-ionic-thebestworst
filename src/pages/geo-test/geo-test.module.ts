import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoTestPage } from './geo-test';

@NgModule({
  declarations: [
    GeoTestPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoTestPage),
  ],
})
export class GeoTestPageModule {}
