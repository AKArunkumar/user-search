import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, filter, switchMap } from 'rxjs/operators';


import { User } from '../user.model';

@Injectable()
export class UserService {

  users: User[] = [];
  searchName = new BehaviorSubject<string>("");
  users_api = 'https://api.github.com/search/users?q=tom';
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get(this.users_api).subscribe(data => {
      const userItem = data["items"];
      userItem.forEach(user => {
        let usr = new User(user["login"], user["id"], user["avatar_url"], user["html_url"], user["followers_url"],user["following_url"],user["repos_url"],user["score"])
        this.users.push(usr);
      });
    })

 }

  getUserRepos(url: string) {
    // getRepos of requested user
  }

}
