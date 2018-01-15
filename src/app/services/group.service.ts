import { Injectable } from '@angular/core';
import { GroupModule } from '../models/group/group.module';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupService {
  dataUrl = './assets/groups.json';

  constructor( private http: HttpClient) { }

  getGroups() {
    return this.http.get<GroupModule>(this.dataUrl);
  }

}
