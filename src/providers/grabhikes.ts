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
  
  //GET /api/activities/findOne?filter={"where":{"id":1234}}
  getFavoriteHikes(token){
    return this.http.get(
      //this.baseUrl + '/hikes/' + '?filter[where][id]=' + '5918fa9eda001c0ab5d55876',
      this.baseUrl + '/AppUsers/' + '?filter[include]=FavoriteHikes&filter[where][id]=' + '59112eddad37773740418159',
      // response keeps returning blank 200, this works in API explorer {"where": {"id": "591393f2d9785c7ee8d4101d"}}
      {}
      );
  }
  
  getHikeDetails(token, hikeId){
    return this.http.get(
    this.baseUrl + '/hikes/' + '?filter[where][id]=' + hikeId,
    {}
    );
  }

}
