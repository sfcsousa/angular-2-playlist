import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from "@angular/router";

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
    yell = (e:any) => {
      alert("I'm yelling");
      console.log(e);
    }
}
