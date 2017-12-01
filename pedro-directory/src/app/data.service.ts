import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';

interface ninja {
  name:string;
  belt:string;
}


@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}
  getNinja(){
    return this.http.get('https://ps-angular5-2.firebaseio.com/.json')
                .switchMap((data:any)=>data);
  }
}
