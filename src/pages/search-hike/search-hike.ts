import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { HikeDetails } from '../hike-details/hike-details';
import 'rxjs/add/operator/debounceTime';

import { Grabhikes } from '../../providers/grabhikes';

/**
 * Generated class for the SearchHike page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
 
let hikeList = []; 
@IonicPage()
@Component({
  selector: 'page-search-hike',
  templateUrl: 'search-hike.html',
})
export class SearchHike {
  
  searchTerm: string = '';
  searchControl: FormControl;
  hikes: any;
  hikers: any = [];
  searching: any = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataService: Data,
    public hikeGrabber: Grabhikes
    ) {
      
      hikeGrabber.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph')
      .map(res => res.json())
      .subscribe(res => {
      hikeList = res;
      for( let hikes of hikeList) {
      console.log("hike list : " + hikeList[0]);
      console.log("hike list 1: " + hikeList[hikes.hikeName]);
      console.log("this is hike is: " + hikes.hikeName);
      }
      }, error => {
           alert("warning");
         }
      );
      
      
      this.searchControl = new FormControl();
      this.setFilteredItems();
      //console.log("this worked" + dataService.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph'));
  }

  ionViewDidLoad() {
      this.setFilteredItems();
      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
      });
    console.log('ionViewDidLoad SearchHike');
  }
  
  onSearchInput(){
    this.searching = true;
  }
  
  setFilteredItems(){
    this.hikes = this.dataService.filterItems(this.searchTerm);
  }
  
  viewItem(item){
    this.navCtrl.push(HikeDetails, {
      item: item
    });
  }

}
