import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../user.model';

@Injectable()
export class UserService {

  users: User[];
  searchName = new BehaviorSubject<string>("");
  users_api = 'https://api.github.com/search/users?q=tom';
  constructor(private http: HttpClient) { }

  getUsers() {
    //  this.http.get(this.users_api);
    
  }

  getUserRepos(url: string) {
    // getRepos of requested user
  }

}
