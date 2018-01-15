import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../models/user/user.module';

@Injectable()
export class UserService {
  dataUrl = './assets/users.json';
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<UserModule>(this.dataUrl);
  }

}
