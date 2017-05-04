import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../providers/app-user'; 
import { Lobby } from '../lobby/lobby';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
   user: any = {};
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public appUser: AppUser
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
  loginForm(form) {
    console.log(form);
    if(form.invalid){
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      if(res.data == null) {
        alert("User is offline");
      }
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(Lobby);
    }, error => {
      if(error.status === 404){
        alert("Error 404: Service Not Found, Try again, maybe our servers are down.");
      } else if( error.status === 422){
        alert("Error 422: Sorry email is already registered, please use a different email");
      } else if (error.status === 500) {
        alert("Error 500: Sorry our servers are down");
      } 
    });
  }

}
