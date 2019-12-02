import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtResponse} from '../interface/JwResponse';
import {IRegister} from '../interface/i-register';
import {IProfile} from '../interface/i-profile';
import {LinkAPIService} from '../service/link-api.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) {
  }
  attemptAuth(credentials: IRegister): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url.link}/api/auth/signin`, credentials, httpOptions);
  }
  update(user: IProfile): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url.link}/profile/edit/${user.token}`, user);
  }
}
