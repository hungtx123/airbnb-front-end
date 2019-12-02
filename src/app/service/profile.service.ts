import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProfile} from '../interface/i-profile';
import {JwtResponse} from '../interface/JwResponse';
import {IPass} from '../interface/i-pass';
import {LinkAPIService} from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) {
  }

  getOneAcc(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url.link}/user/${id}`);
  }

  updateAcc(user: Partial<IProfile>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.url.link}/profile/edit`, user);
    }
  }

  updatePass(user: Partial<IPass>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.url.link}/profile/editPassword`, user);
    }
  }

  getOneAccToken(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.url.link}/profile`);
  }

  getOnePassToken(): Observable<IPass> {
    return this.http.get<IPass>(`${this.url.link}/profile`);
  }
}
