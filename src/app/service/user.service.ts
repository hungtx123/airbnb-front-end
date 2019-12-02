import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HomeHost} from '../interface/home-host';
import {JwtResponse} from '../interface/JwResponse';
import {Order} from '../interface/order';
import {StatusListUser} from '../interface/StatusListUser';
import {LinkAPIService} from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) { }
  getAllHome(): Observable <HomeHost[]> {
    return this.http.get<HomeHost[]>(`${this.url.link}/api/guest/all`);
  }

  orderHome(status: Order): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url.link}/api/order/create`, status);
  }
  listTimeOrderHome(id: number): Observable <StatusListUser[]> {
  return this.http.get<StatusListUser[]>(`${this.url.link}/api/status/${id}`); }
}
