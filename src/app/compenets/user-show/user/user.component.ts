import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dummyData = { name: "arunkumar", photo:"https://avatars0.githubusercontent.com/u/1?v=4",
                repos: "waitfor"}
  constructor() { }

  ngOnInit() {
  }

}
