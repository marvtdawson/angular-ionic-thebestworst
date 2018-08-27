import { Component } from '@angular/core';

/**
 * Generated class for the BsNavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bs-navbar',
  templateUrl: 'bs-navbar.html'
})
export class BsNavbarComponent {

  text: string;

  constructor() {
    console.log('Hello BsNavbarComponent Component');
    this.text = 'Hello World';
  }

}
