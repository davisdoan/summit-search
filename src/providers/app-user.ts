import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUser {

  baseUrl: string = "https://sp-17-davis-jbrownssf.c9users.io:8080/api";
  path: string ="/AppUsers";

  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  
  register(newUserData){
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
    );
  }
  
  login(oldUserData){
    return this.http.post(
      this.baseUrl + this.path + "/login", oldUserData  
    );
  }
  
  logout(token){
    return this.http.post(
      this.baseUrl + this.path + '/logout' + 
      '?access_token=' + token,
      {}
    );
  }

}
