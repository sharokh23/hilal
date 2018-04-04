import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username = '';
  password = '';
  error = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    private userProvider:UserProvider) {
  }

  login() {
    this.userProvider.login(this.username, this.password)
    .subscribe(token => {
      this.storage.set('username', this.username);
      this.storage.set('access_token', token['access_token']);
      this.storage.set('refresh_token', token['refresh_token']);
      this.storage.set('expires_in', token['expires_in']);

      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.error = err.error.message;
      console.log(err);
    });
  }

  register() {
    this.navCtrl.push(RegisterPage)
  }

}
