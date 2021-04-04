import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angularpoc';
  
  metadata = [{
    'type': 'C',
    'showIcon': true

  },{
    'type': 'C',
    'showIcon': false,
    'selectionMode':'single'

  }
]
}
