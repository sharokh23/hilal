import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SightingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sighting',
  templateUrl: 'sighting.html',
})
export class SightingPage {
  sighting = {
    'affiliation': this.navParams.get('affiliation'),
    'altitude': this.navParams.get('altitude'),
    'city': this.navParams.get('city'),
    'confirmed': this.navParams.get('confirmed'),
    'createdAt': this.navParams.get('created_at'),
    'email': this.navParams.get('email'),
    'firstName': this.navParams.get('first_name'),
    'image': this.navParams.get('image'),
    'lastName': this.navParams.get('last_name'),
    'moonVisibility': this.navParams.get('moon_visibility'),
    'phoneNumber': this.navParams.get('phone_number'),
    'role': this.navParams.get('role'),
    'sex': this.navParams.get('sex'),
    'state': this.navParams.get('state'),
    'updatedAt': this.navParams.get('updated_at'),
    'userCreatedAt': this.navParams.get('user_created_at'),
    'userWeather': this.navParams.get('user_weather'),
    'userVerified': this.navParams.get('verified'),
    'weather': this.navParams.get('weather'),

  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    
  }

}
