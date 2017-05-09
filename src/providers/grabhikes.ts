import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Grabhikes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Grabhikes {
  
  baseUrl: string = "https://sp-17-davis-jbrownssf.c9users.io:8080/api";
  path: string ="/AppUsers";

  constructor(public http: Http) {
    console.log('Hello Grabhikes Provider');
  }
  
  getHikes(token){
    return this.http.get(
      this.baseUrl + '/hikes/' + '?access_token=' + token, 
      {}
      );
  }

}
