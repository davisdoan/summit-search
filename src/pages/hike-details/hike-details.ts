import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lobby } from '../lobby/lobby';
import { Data } from '../../providers/data';

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
  showSave: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataService: Data
    ) {
    this.hikeName = this.navParams.get('item').hikeName;
    this.hikeElevation = this.navParams.get('item').hikeElevation;
    this.hikeDistance = this.navParams.get('item').hikeDistance;
    this.hikeWeather = this.navParams.get('item').hikeWeather;
    this.hikeImageUrl = this.navParams.get('item').hikeImageUrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HikeDetails');
    this.hikeName = this.navParams.get('item').hikeName;
    this.hikeElevation = this.navParams.get('item').hikeElevation;
    this.hikeDistance = this.navParams.get('item').hikeDistance;
    this.hikeWeather = this.navParams.get('item').hikeWeather;
    this.hikeImageUrl = this.navParams.get('item').hikeImageUrl;
    this.showSave = this.navParams.get("showSave");
  }
  
  thisWorks(){
    console.log("button works");
  }
  
  saveHike(){
    let favHikes : any = JSON.parse(window.localStorage.getItem("favHikes")) || [];
    favHikes.push(this.navParams.get('item'));
    window.localStorage.setItem("favHikes", JSON.stringify(favHikes));
    console.log("save button works for : " + this.hikeName);
    this.navCtrl.setRoot(Lobby);
  }

}
