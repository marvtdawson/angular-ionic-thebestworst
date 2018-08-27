import { NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from "../pages/home/home";
// import { AboutComponent } from "../pages/about/about.component";


const appRoutes: Routes = [
  {path: '', component: HomePage},
  // {path: 'about', component: AboutPage},
];

@NgModule ({
  declarations: [
    //AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    //AboutComponent
  ]
})

export class AppRoutingModule {}
