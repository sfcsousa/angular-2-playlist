import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() ninja;
  @Output() onYell = new EventEmitter();
  constructor() { }
  alertMe(a:String){
   alert(a);
  }
  fireYellEvent(e){
    this.onYell.emit(e);
  }
  ngOnInit() {
  }

}
