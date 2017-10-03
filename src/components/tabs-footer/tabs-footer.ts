import { Component } from '@angular/core';

@Component({
  selector: 'tabs-footer',
  templateUrl: 'tabs-footer.html'
})
export class TabsFooterComponent {

  text: string;

  constructor() {
    console.log('Hello TabsFooterComponent Component');
    this.text = 'Hello World';
  }

}
