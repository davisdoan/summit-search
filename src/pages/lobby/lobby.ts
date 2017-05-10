import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Landing } from '../landing/landing';
import { SearchHike } from '../search-hike/search-hike';
import { HikeDetails } from '../hike-details/hike-details';
import { AppUser } from '../../providers/app-user'; 
import { Data } from '../../providers/data';
/**
 * Generated class for the Lobby page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class Lobby {
  favHikes: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser,
    public modalCtrl: ModalController,
    public dataService: Data
    ) {
  }

  ionViewDidLoad() {
    this.favHikes = JSON.parse(window.localStorage.getItem('favHikes')) || [];
    console.log('ionViewDidLoad Lobby');
  }
  
   toLogOut() {
    this.appUser.logout(window.localStorage.token);
    window.localStorage.setItem('token', null);
    window.localStorage.setItem('userId', null);
    window.localStorage.setItem('favHikes', null);
    this.navCtrl.setRoot(Landing);
  }
  
  toSearch() {
    this.navCtrl.push(SearchHike);
  }
  
   viewItem(item){
    console.log( "hike chosen " + item.hikeName + "view item works");
    this.navCtrl.push(HikeDetails, {
      item: item
    });
  }

}
