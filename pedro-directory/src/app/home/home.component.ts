import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  home_text = "Welcome to the home page ladies and gents...";

  constructor(private logger:LoggingService) { }
  logIt(){
    this.logger.log();
  }
  ngOnInit() {
  }

}
