import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';
import {IRole} from '../interface/i-role';
import {LinkAPIService} from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) { }
  getRole(): Observable<IRole> {
    return this.http.get<IRole>(`${this.url.link}/profile/role`);
  }
}
