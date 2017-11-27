import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router'
import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectoryComponent implements OnInit {
  classes = {'blue':false,'red':true,'underline':true};
  test =  true; 
  constructor() {
    }

  ngOnInit() {
  }

}
