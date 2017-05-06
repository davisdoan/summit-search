import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  
  hikes: any;
  constructor(public http: Http) {
    
    this.hikes = [
                { hikeName: 'Mt.Everest',
                  hikeElevation: '29,029 feet',
                  hikeDistance: '62.5 miles',
                  hikeWeather: '-10 F',
                  hikeImageUrl: 'https://i.imgur.com/IDKYR7B.jpg'
                },
                { hikeName: 'Half Dome',
                  hikeElevation: '8,839 feet',
                  hikeDistance: '16.5 miles',
                  hikeWeather: '43 F',
                  hikeImageUrl: 'https://i.imgur.com/ZjdoIhO.jpg'
                },
                { hikeName: 'Havasupai'},
                { hikeName: 'Mt.Whitney'}
      ]
    console.log('Hello Data Provider');
  }
  
  filterItems(searchTerm){
    
    return this.hikes.filter((item) => {
      return item.hikeName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
