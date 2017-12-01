import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

interface ninja {
  name:string;
  belt:string;
}


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ DataService ]
})
export class DirectoryComponent implements OnInit {
  ninjas:any;
  bool = null;
  constructor( private logger: LoggingService,
               private dataService: DataService ) {
  }

  logIt(){
    this.logger.log();
  }
  ngOnInit() {
    this.getNinjas();
  }
  getNinjas():void{
    this.dataService.getNinja()
          .subscribe((aninjas:any, i:number =0) =>{this.ninjas = aninjas.toArray()});
  }
}
