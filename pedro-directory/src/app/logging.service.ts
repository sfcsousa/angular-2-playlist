import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(){
    console.log("A test service to show logging to console.")
  }
  constructor() { }

}
