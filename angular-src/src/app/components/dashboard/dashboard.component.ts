import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users$: Observable<User[]>;
  users: User[];
  firstName: String;
  surname: String;
  age: Number;
  gender: String;
  friends: String[];

  constructor(private userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  onClick(id: Number) {
    this._router.navigate(['/profile/', { id: id }]);
  }
}
