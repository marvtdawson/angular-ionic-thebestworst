import { Component } from '@angular/core';

/**
 * Generated class for the ForgotPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordComponent {

  text: string;

  constructor() {
    console.log('Hello ForgotPasswordComponent Component');
    this.text = 'Hello World';
  }

}
