import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap'
import { FilterPipe } from '../filter.pipe'
import { LoggingService } from '../logging.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {name:"Goku", belt: "green"},
    {name:"Yoshi", belt: "black"},
    {name:"Jonny", belt: "purple"},
  ]
  constructor( private logger: LoggingService ) {

  }
  logIt(){
    this.logger.log();
  }
  ngOnInit() {
  }

}
