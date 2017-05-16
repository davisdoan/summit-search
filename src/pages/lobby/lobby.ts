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
let hikeDetail = {};
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})

export class Lobby {
  favHikes: any = [];
  userToken = window.localStorage.getItem('token');
  currUserId = window.localStorage.getItem('userId');
  hikeDetailsList = [];
  favHikeIds = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser,
    public modalCtrl: ModalController,
    public dataService: Data,
    public hikeGrabber: Grabhikes
    ) {
  }
  
  showSavedHikes(list){
    for(let k=0; list.length; k++){
      console.log("we have the hike details for " + list[k].hikeName);
    }
  }

  ionViewDidLoad() {
    this.hikeDetailsList = [];
    this.favHikeIds = [];
    this.hikeGrabber.getFavoriteHikes(this.userToken,this.currUserId)
    .map(res => res.json())
    .subscribe(res => {
      favoriteHikesRes = res;
      for(let i=0; i< favoriteHikesRes[0].FavoriteHikes.length; i++){
        this.favHikeIds.push(favoriteHikesRes[0].FavoriteHikes[i].hikeId);
        //console.log("just added in hikdId " + favoriteHikesRes[0].FavoriteHikes[0].hikeId);
      }
      for(let j=0; j< this.favHikeIds.length; j++){
        //console.log("The hike ids are " + this.favHikeIds[j]);
        this.hikeGrabber.getHikeDetails(this.userToken, this.favHikeIds[j]).map(res => res.json())
        .subscribe(res => {
          hikeDetail = res;
          //console.log("current hike detail is " + hikeDetail[0].hikeName);
          this.hikeDetailsList.push(hikeDetail);
        });
      }
    }, error => {
      alert("warning" + error);
    }
    );
    console.log('ionViewDidLoad Lobby' + this.hikeDetailsList);
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
    //console.log( "hike chosen " + item.hikeName + "view item works");
    this.navCtrl.push(HikeDetails, {
      item: item
    });
  }
}
