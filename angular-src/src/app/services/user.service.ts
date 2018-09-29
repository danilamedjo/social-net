import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIUsers = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

    getUsers() {
      return this.httpClient.get(this.APIUsers);
    }

  }
