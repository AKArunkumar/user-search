import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/serives/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dummyData = { name: "arunkumar", photo:"https://avatars0.githubusercontent.com/u/1?v=4",
                repos: "waitfor"}
  profileShow = false;
  user: User;
  repos: string[];
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
    this.userservice.getUserRepos().subscribe(data => {
      console.log(data);
      
    })
    
  }
}
