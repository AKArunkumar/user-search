import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/serives/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profileShow = false;
  user: User;
  repos: any[] =[];
  constructor(private userservice: UserService) { }

  ngOnInit() {
  this.userservice.userinfo.subscribe(usr => {
      this.user = usr;
      console.log(this.user);
      
    })
  }
  userdetails(){
    this.profileShow = false;    
  }
  repodetails(){
    this.profileShow = true;
    if(this.repos.length == 0) {
      this.userservice.getUserRepos().subscribe(data => {
        this.repos = data;
      })
    }    
  }
}
