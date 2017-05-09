import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Landing } from '../landing/landing';
import { SearchHike } from '../search-hike/search-hike';

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

  public items = [1, 2, 3];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser,
    public modalCtrl: ModalController,
    public dataService: Data
    ) {
      this.dataService.getData().then((favorites) => {
      if(favorites) {
        this.items = JSON.parse(favorites);
      }
    });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lobby');
  }
  
   toLogOut() {
    this.appUser.logout(window.localStorage.token);
    window.localStorage.setItem('token', null);
    window.localStorage.setItem('userId', null);
    this.navCtrl.setRoot(Landing);
  }
  
  toSearch() {
    this.navCtrl.push(SearchHike);
  }
  
   viewItem(item){
    console.log("view item works");
  }

}
