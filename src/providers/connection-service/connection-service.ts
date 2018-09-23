import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectionServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectionService {

  constructor(public http: HttpClient) {
    console.log();
  }

  checkNetworkConnection (){

    // 1. show network connection toast from Toast Service


    // 2. show

  }

}
