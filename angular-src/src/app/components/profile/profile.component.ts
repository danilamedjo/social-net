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
  friendsId: String[];
  friendId: String;
  friend: User;
  friends: User[];


  constructor(private _route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        this._id = params.get('id');
      });
    this.getUsers();

  }

  getFriends() {
    this.friends = new Array();
    for (let i = 0; i < this.friendsId.length; i++) {
      this.friendId = this.friendsId[i];
      this.userService.getUser(this.friendId).subscribe(
        user => {
          if (user) {
            this.friend = user;
            this.friends.push(this.friend);
          }
        }
      );
    }
  }

  getUsers() {
    this.userService.getUser(this._id).subscribe(
      user => {
        this.user = user;
        this.friendsId = user.friends;
      },
      (err) => { console.log(err); },
      () => {
        this.getFriends();
      });
  }

}
