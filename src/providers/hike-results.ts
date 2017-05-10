import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HikeResults provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HikeResults {
  constructor(public http: Http) {
    console.log('Hello HikeResults Provider');
  }
  
  baseUrl: string = "https://sp-17-davis-jbrownssf.c9users.io:8080/api/";
  path: string ="FavoriteHikes/";
  
  save(token, hike){
    console.log(this.baseUrl + this.path + "?access_token=" + token + JSON.stringify(hike));
    return this.http.post(
      this.baseUrl + this.path +
      '?access_token=' + token,
      hike
    );
  }

}
