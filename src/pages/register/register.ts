import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../providers/app-user'; 
import { Http } from '@angular/http';
import { Lobby } from '../lobby/lobby';


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  user: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUser: AppUser
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  
  signupForm(form) {
    console.log(form);
    if(form.invalid){
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUser.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      if(res.data == null) {
        alert("User is offline");
      }
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
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
