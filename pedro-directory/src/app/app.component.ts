import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app, mas que carvalho, works';
  name = 'Meu nome vai aqui pai';
  ninja = {
    name: 'Castan',
    belt: 'Gold'
  };
}
