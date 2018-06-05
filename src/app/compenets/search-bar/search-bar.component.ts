import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/serives/user.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  filtername = '';
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  doFilter(filtername: string) {
    this.userservice.searchName.next(filtername)
    
  }
}
