import { Injectable } from '@angular/core';
import {IRegister} from '../interface/i-register';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LinkAPIService} from './link-api.service';
import {HomeHost} from '../interface/home-host';
import {ISearch} from '../interface/i-search';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public address: string;
  constructor(private http: HttpClient,
              private url: LinkAPIService) { }
  createAcc(user: Partial<IRegister>): Observable<IRegister> {
    return this.http.post<IRegister>(`${this.url.link}/api/auth/signup`, user);
  }
  searchHomeStay(search: ISearch): Observable <HomeHost[]> {
  return this.http.post<HomeHost[]>(`${this.url.link}/api/guest/search`, search);
  }
}
