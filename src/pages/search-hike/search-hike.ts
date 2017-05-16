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
let stringyList = [];
@IonicPage()
@Component({
  selector: 'page-search-hike',
  templateUrl: 'search-hike.html',
})
export class SearchHike {
  searchTerm: string = '';
  searchControl: FormControl;
  hikes: any;
  searching: any = false;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public dataService: Data,
    public hikeGrabber: Grabhikes
    ) {
       //hikeArray = [];
      this.searchControl = new FormControl();
      hikeGrabber.getHikes('TIJW9U3qLlE0QZyB0BEKe8CslBtAxFhHNHzWmosfqW9ttgNwfmo8mUMIseKx9Kph')
      .map(res => res.json()) //this line takes the response from the server (which is in json stringified form) and turns it into normal json. --John
      .subscribe(res => { //this res is a derivative of the res.json() --John
        hikeList = res;
        // for(let i=0; i< hikeList.length; i++){
        //   hikeArray.push(hikeList[i]);
        //   console.log("current item is " + hikeArray[i]);
        // }
      console.log(hikeList);
        
      this.setFilteredItems();
      this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
      });
      }, error => {
           alert("warning");
         }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchHike');
  }
  
  onSearchInput(){
    this.searching = true;
  }
  
  setFilteredItems(){
    this.hikes = this.dataService.filterItems(hikeList,this.searchTerm);
  }
  
  viewItem(item){
    this.navCtrl.push(HikeDetails, {
      item: item,
      showSave: true
    });
  }

}
