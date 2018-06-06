import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from '../../shared/serives/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  filtername = '';
  static allUsers: User[] = [];  
  constructor(private userservice: UserService,
              private router: Router) { }

  ngOnInit() {
    if(SearchBarComponent.allUsers.length == 0){
    this.userservice.getUsers();
    SearchBarComponent.allUsers = this.userservice.users;            
    }
  }
  userClick(usr: User) {
    this.userservice.userinfo.next(usr);
    setTimeout(this.router.navigate([usr.name]), 1000);
  }
 
}
