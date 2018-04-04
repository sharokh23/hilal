import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  first_name = '';
  last_name = '';
  phone_number = '';
  email = '';
  password = '';
  confirm_password = '';
  sex = '';
  role = '';
  affiliation = '';
  error = '';


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    private userProvider:UserProvider) {

  }

  register() {
    let user = {
      'first_name': this.first_name,
      'last_name' : this.last_name,
      'phone_number' : this.phone_number,
      'email' : this.email,
      'password' : this.password,
      'confirm_password' : this.confirm_password,
      'sex' : this.sex,
      'role' : this.role,
      'affiliation' : this.affiliation
    };

    this.userProvider.register(user)
    .subscribe(user => {
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
      let errorMessage = JSON.parse(err['_body']);
      this.error = errorMessage.message;
    });
  }

}
