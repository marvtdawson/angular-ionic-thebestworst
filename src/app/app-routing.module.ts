import { NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";


const appRoutes: Routes = [
  {path: '', component: HomePage},
  // {path: 'about', component: AboutPage},
];

@NgModule ({
  declarations: [
    AboutPage
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    AboutPage
  ]
})

export class AppRoutingModule {}
