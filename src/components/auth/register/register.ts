import { Component } from '@angular/core';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  text: string;

  constructor() {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

}
