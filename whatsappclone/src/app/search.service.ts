import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpService } from "./http.service";

@Injectable()
export class SearchService {

	constructor(private httpService : HttpService) { }
    
  public getUsers(params,callback){
    this.httpService.getUsers(params).subscribe(
              response => {
                  callback(response);
              },
              error => {
                  alert('HTTP fail in service search');
              }
          );
}
}