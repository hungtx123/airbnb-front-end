import { Injectable } from '@angular/core';
import {IRegister} from '../interface/i-register';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LinkAPIService} from './link-api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) { }
  createAcc(user: Partial<IRegister>): Observable<IRegister> {
    return this.http.post<IRegister>(`${this.url.link}/api/auth/signup`, user);
  }
}
