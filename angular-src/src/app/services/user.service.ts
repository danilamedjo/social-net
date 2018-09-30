import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUsers = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.APIUsers + '/all');
    }

    getUser(id: String): Observable<User> {
      return this.httpClient.get<User>(this.APIUsers + '/' + id);
    }

  }
