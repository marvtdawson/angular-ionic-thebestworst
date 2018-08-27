import { Component } from '@angular/core';

/**
 * Generated class for the BsFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bs-footer',
  templateUrl: 'bs-footer.html'
})
export class BsFooterComponent {

  text: string;

  constructor() {
    console.log('Hello BsFooterComponent Component');
    this.text = 'Hello World';
  }

}
