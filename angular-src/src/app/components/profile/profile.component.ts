import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _id: String;
  user: User;
  firstName: String;
  surname: String;
  age: Number;
  gender: String;
  friends: String[];


  constructor(private _route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      }
    );
    this.userService.getUser(this._id).subscribe(
      (data) => {
        this.user = data;
        this.friends = data.friends;
      });
  }

}
