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
  ninja: string;
  constructor(private route: ActivatedRoute,
              private router: Router) {
    }

  ngOnInit() {
    //this.ninja = route.paramMap.get('ninja');
    let Jeez = (a:any) =>{
      return a.toString();
    }
    let teste = this.route.paramMap
                .switchMap((params: ParamMap) => Jeez(params.get('ninja'))) 

    console.log(teste);
    this.ninja =  this.route.snapshot.paramMap.get('ninja');
  }

}
