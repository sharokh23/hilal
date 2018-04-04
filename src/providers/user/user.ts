import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  loginURL;
  registerURL;

  constructor(public http:Http) {
    this.loginURL = 'http://hilal.mainstay.us/oauth/token';
    this.registerURL = 'http://hilal.mainstay.us/api/v1/user';
  }

  login (username, password) {
    let body = new FormData();
    body.append('grant_type', 'password');
    body.append('client_id', '2');
    body.append('client_secret', 'dNncvp49FRzyDPvXzEC06sbZTq8GG0QV95cOK3Pe');
    body.append('username', username);
    body.append('password', password);
    body.append('scope', '*');

    return this.http.post(this.loginURL, body)
    .map(res => res.json());
  }

  register (user) {
    let body = new FormData();
    body.append('first_name', user.first_name);
    body.append('last_name', user.last_name);
    body.append('phone_number', user.phone_number);
    body.append('email', user.email);
    body.append('password', user.password);
    body.append('confirm_password', user.confirm_password);
    body.append('sex', user.sex);
    body.append('role', user.role);
    body.append('affiliation', user.affiliation);

    return this.http.post(this.registerURL, body)
    .map(res => res);
  }

  edit (user) {
    
  }

}
