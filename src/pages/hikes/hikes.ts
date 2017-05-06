import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Hikes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
                    
let apiHikes = [   {  "hikeName":"Mt.Everest",
                      "hikeElevation":"29,029 feet",
                      "hikeDistance":"62.5 miles",
                      "hikeWeather":"-10 F",
                      "hikeImageUrl":"https://i.imgur.com/IDKYR7B.jpg"
                    },
                    {  "hikeName":"Half Dome",
                      "hikeElevation":"8,839 feet",
                      "hikeDistance":"16.5 miles",
                      "hikeWeather":"43 F",
                      "hikeImageUrl":"https://i.imgur.com/ZjdoIhO.jpg"
                    }
                    ];                    
 
@IonicPage()
@Component({
  selector: 'page-hikes',
  templateUrl: 'hikes.html',
})
export class Hikes {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hikes');
  }

}
