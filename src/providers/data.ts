import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  baseUrl: string = "https://sp-17-davis-jbrownssf.c9users.io:8080/api";
  path: string ="/AppUsers";
  hikes: any;
  constructor(
    public http: Http,
    public storage: Storage
    ) {
    
    //console.log("data provider works" + this.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph'));
    //this.hikes = this.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph');
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
                { hikeName: 'Havasupai',
                  hikeElevation: '2800 feet',
                  hikeDistance: '10 Miles',
                  hikeWeather: '84 F',
                  hikeImageUrl: 'https://i.imgur.com/D0XOm3G.jpg'
                },
                { hikeName: 'Mt.Whitney',
                  hikeElevation: '14,505 feet',
                  hikeDistance: '22 Miles',
                  hikeWeather: '33 F',
                  hikeImageUrl: 'https://i.imgur.com/uwziYGV.jpg'
                }
      ]
      
      
    console.log('Hello Data Provider' + this.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph'));
  }
  
  filterItems(list, searchTerm){
    console.log( " filtering " + list);
    return list.filter((item) => {
      return item.hikeName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
  getData(){
    return this.storage.get('favorites');
  }
  
  save(data){
    let newData = JSON.stringify("test");
    this.storage.set('favorites', newData);
  }
  
   getHikes(token){
    return this.http.get(
      this.baseUrl + '/hikes/' + '?access_token=' + token, 
      {}
      );
  }

}
