import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Landing } from '../landing/landing';
import { SearchHike } from '../search-hike/search-hike';

import { AppUser } from '../../providers/app-user'; 

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
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

}
