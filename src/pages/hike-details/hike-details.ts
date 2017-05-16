import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lobby } from '../lobby/lobby';
import { Data } from '../../providers/data';
import { HikeResults } from '../../providers/hike-results';

/**
 * Generated class for the HikeDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hike-details',
  templateUrl: 'hike-details.html',
})
export class HikeDetails {
  hikeName;
  hikeElevation;
  hikeDistance;
  hikeWeather;
  hikeImageUrl;
  hikeId;
  hikeArray;
  showSave: boolean = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataService: Data,
    public hikeResults: HikeResults
    ) {
    this.showSave = this.navParams.get("showSave");
    if(!this.showSave){  
      this.hikeArray = this.navParams.get('item');
      this.hikeName = this.hikeArray[0].hikeName;
      this.hikeElevation = this.hikeArray[0].hikeElevation;
      this.hikeDistance = this.hikeArray[0].hikeDistance;
      this.hikeWeather = this.hikeArray[0].hikeWeather;
      this.hikeImageUrl = this.hikeArray[0].hikeImageUrl;
      this.hikeId = this.hikeArray[0].id;
    } else {
      this.hikeName = this.navParams.get('item').hikeName;
      this.hikeElevation = this.navParams.get('item').hikeElevation;
      this.hikeDistance = this.navParams.get('item').hikeDistance;
      this.hikeWeather = this.navParams.get('item').hikeWeather;
      this.hikeImageUrl = this.navParams.get('item').hikeImageUrl;
      this.hikeId = this.navParams.get('item').id;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HikeDetails');
  }
  
  thisWorks(){
    console.log("button works");
  }
  
  saveHike(){
      // local storage stuff
      // let favHikes : any = JSON.parse(window.localStorage.getItem("favHikes")) || [];
      // favHikes.push(this.navParams.get('item'));
      // window.localStorage.setItem("favHikes", JSON.stringify(favHikes));
      
      let token = window.localStorage.getItem('token')
      let saveHike = {userId: '', hikeId: ''};
      saveHike.userId = window.localStorage.getItem('userId');
      saveHike.hikeId = this.hikeId;
      
      this.hikeResults.save(token, saveHike)
      .map(res=> res.json())
      .subscribe(res => {
          this.navCtrl.setRoot(Lobby);
      }, err => {
        console.log("error dude " + err);
      });
  }
}
