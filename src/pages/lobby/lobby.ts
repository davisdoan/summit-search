import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Landing } from '../landing/landing';
import { SearchHike } from '../search-hike/search-hike';
import { HikeDetails } from '../hike-details/hike-details';
import { AppUser } from '../../providers/app-user'; 
import { Data } from '../../providers/data';
import { Grabhikes } from '../../providers/grabhikes';
/**
 * Generated class for the Lobby page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 

let favoriteHikesRes = []; 
let favHikeIds = [];
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})

export class Lobby {
  favHikes: any = [];
  userToken = window.localStorage.getItem('token');

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser,
    public modalCtrl: ModalController,
    public dataService: Data,
    public hikeGrabber: Grabhikes
    ) {
  }

  ionViewDidLoad() {
    this.hikeGrabber.getFavoriteHikes(this.userToken)
    .map(res => res.json())
    .subscribe(res => {
      favoriteHikesRes = res;
      //console.log(favoriteHikesRes);
      //console.log("first item is: " + favoriteHikesRes[0].FavoriteHikes[0].hikeId);
      for(let i=0; i< favoriteHikesRes[0].FavoriteHikes.length; i++){
        favHikeIds.push(favoriteHikesRes[0].FavoriteHikes[i].hikeId);
        console.log("just added in hikdId " + favoriteHikesRes[0].FavoriteHikes[0].hikeId);
      }
      for(let j=0; j< favHikeIds.length; j++){
        console.log("The hike ids are " + favHikeIds[j]);
      }
    
    }, error => {
      alert("warning" + error);
    }
    );
    //this.favHikes = JSON.parse(window.localStorage.getItem('favHikes')) || [];
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
