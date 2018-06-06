import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/serives/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

  dummyData = { name: "arunkumar", photo:"https://avatars0.githubusercontent.com/u/1?v=4",
                repos: "waitfor"}
  searchName: string;
  allUsers: User[] = [];
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.searchName.subscribe(filtername => {
      this.searchName = filtername
    })
    this.userservice.getUsers();
    this.allUsers = this.userservice.users;
  }

  userClick(usr: User) {
    this.userservice.userinfo.next(usr);
  }

}
