import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { LoginPage } from '../login/login';
import { SightingPage } from '../sighting/sighting';
import { NewSightingPage } from '../newsighting/newsighting';
import { SightingsProvider } from '../../providers/sightings/sightings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sightings = [];
  error = '';
  token = '';

  constructor(public navCtrl: NavController, private storage:Storage, private sightingsProvider:SightingsProvider) {
    this.storage.get('access_token').then((tok) => {
      this.sightingsProvider.getSightings(tok)
    .subscribe(sightings => {
      this.sightings = sightings['data'];
    }, (err) => {
      this.error = err;
      console.log(err);
    });
    });
  }

  logout() {
    this.storage.set('username', null);
    this.storage.set('access_token', null);
    this.storage.set('refresh_token', null);
    this.storage.set('expires_in', null);

    this.navCtrl.setRoot(LoginPage);
  }

  newSighting() {
    this.navCtrl.push(NewSightingPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  SightingClicked(sighting) {
    this.navCtrl.push(SightingPage, sighting);
  }

}
