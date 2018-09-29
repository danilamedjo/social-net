import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];
  firstName: String;
  surname: String;
  age: Number;
  gender: String;
  friends: String[];
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.users = this.userService.getUsers() {
    //   () => {}
    // }
  }

}
