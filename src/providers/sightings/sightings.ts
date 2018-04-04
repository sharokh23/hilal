import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SightingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SightingsProvider {
  url = 'http://hilal.mainstay.us/api/v1/sightings';

  constructor(public http:Http) {

  }

  // Sending a GET request to /api/v1/sightings
  public getSightings(token){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.url, {headers: headers}).map(res => res.json());
  }

  // Sending a POST request to /api/v1/sightings
  public createSighting(sighting) {

  }

  // Sending a GET request to /api/v1/sightings/:id
  public getSightingById(productId: number) {

  }

  // Sending a PUT request to /api/v1/sightings/:id
  public updateSighting(sighting){
  }

  // Sending a DELETE request to /api/v1/sightings/:id
  public deleteSightingById(productId: number) {
  }

}
