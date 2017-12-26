import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../../models/users';

/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsersProvider {

  constructor(public http: Http) {
    console.log('Hello GithubUsersProvider Provider');
  }

  load() : Observable<User[]>{
    return this.http.get('https://api.github.com/users').map(res => <User[]>res.json());
  }

  loadDetails(login: string): Observable<User> {
    return this.http.get(`https://api.github.com/users/${login}`).map(res => <User>(res.json()))
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`https://api.github.com/search/users?q=${searchParam}`) 
      .map(res => <User[]>(res.json().items))
  }
}
