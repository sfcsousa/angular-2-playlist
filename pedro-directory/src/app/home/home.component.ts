import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  home_text = "Welcome to the home page ladies and gents...";
  myString  = "Angular? Learning the ropes but it is as easy as...";
  placeholder = "Learning Angular";
  myBoolean = true;
  constructor() { }

  ngOnInit() {
  }

}
