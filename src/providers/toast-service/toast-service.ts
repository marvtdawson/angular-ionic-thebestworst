import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) {}

  basicToast(message: string, duration: number = 4000, position: string){
    return this.toastCtrl.create({
      message,
      duration,
      position,
    }).present();
  }

  registerToast(message: string, duration: number = 4000, position: string){
    return this.toastCtrl.create({
      message,
      duration,
      position,
    })
      .present();
  }

  showNetworkToast(message: string, duration: number = 4000, position: string) {
    return this.toastCtrl.create({
      message,
      duration,
      position,
    })
      .present();
  }

}
