import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { map, filter, switchMap } from 'rxjs/operators';


import { User } from '../user.model';

@Injectable()
export class UserService {

  users: User[] = [];
  userinfo = new BehaviorSubject<any>("");
  users_api = 'https://api.github.com/search/users?q=tom';
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get(this.users_api).subscribe(data => {
        this.users.length = 0;
        const userItem = data["items"];
      userItem.forEach(user => {
        let usr = new User(user["login"], user["id"], user["avatar_url"], user["html_url"], user["followers_url"],user["following_url"],user["repos_url"],user["score"])
        this.users.push(usr);
      });
    })

 }

  getUserRepos(url: string) {
    return this.http.get<any[]>(url)
                    .pipe(
                        map((data) => {
                          let repos:any[] =[];
                          data.forEach(repoinfo => {
                            repos.push(repoinfo['name']);
                          });
                          return repos;                
                      })
                    )
  }

}
