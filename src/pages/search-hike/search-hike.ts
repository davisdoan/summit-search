import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { HikeDetails } from '../hike-details/hike-details';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the SearchHike page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
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
    public dataService: Data
    ) {
      this.searchControl = new FormControl();
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
