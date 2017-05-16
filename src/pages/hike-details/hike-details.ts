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
    this.hikeArray = this.navParams.get('item');
    this.hikeName = this.hikeArray[0].hikeName;
    //this.hikeName = this.navParams.get('item').hikeName;
    this.hikeElevation = this.hikeArray[0].hikeElevation;
    this.hikeDistance = this.hikeArray[0].hikeDistance;
    this.hikeWeather = this.hikeArray[0].hikeWeather;
    this.hikeImageUrl = this.hikeArray[0].hikeImageUrl;
    this.hikeId = this.hikeArray[0].id;
    //let comparisonHikes = window.localStorage.getItem("favHikes");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HikeDetails');
    this.hikeArray = this.navParams.get('item');
    this.hikeName = this.hikeArray[0].hikeName;
    //this.hikeName = this.navParams.get('item').hikeName;
    // this.hikeElevation = this.navParams.get('item').hikeElevation;
    // this.hikeDistance = this.navParams.get('item').hikeDistance;
    // this.hikeWeather = this.navParams.get('item').hikeWeather;
    // this.hikeImageUrl = this.navParams.get('item').hikeImageUrl;
    // this.hikeId = this.navParams.get('item').id;
    this.showSave = this.navParams.get("showSave");
  }
  
  thisWorks(){
    console.log("button works");
  }
  
  saveHike(){
      let favHikes : any = JSON.parse(window.localStorage.getItem("favHikes")) || [];
      let saveHike = {userId: '', hikeId: ''};
      let token = window.localStorage.getItem('token')
      favHikes.push(this.navParams.get('item'));
      window.localStorage.setItem("favHikes", JSON.stringify(favHikes));
      console.log("save button works for : " + this.hikeName + " with id " + this.hikeId);
      console.log("the token is " + window.localStorage.getItem('token'));
      console.log("the user id is " + window.localStorage.getItem('userId'));
      
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
