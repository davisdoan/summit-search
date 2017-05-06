import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HikeDetails');
    this.hikeName = this.navParams.get('item').hikeName;
    this.hikeElevation = this.navParams.get('item').hikeElevation;
    this.hikeDistance = this.navParams.get('item').hikeDistance;
    this.hikeWeather = this.navParams.get('item').hikeWeather;
    this.hikeImageUrl = this.navParams.get('item').hikeImageUrl;
  }

}
