import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IHome} from '../interface/i-home';
import {Observable} from 'rxjs';
import {HomeHost} from '../interface/home-host';
import {StatusSetByHost} from '../interface/statusSetByHost';
import {JwtResponse} from '../interface/JwResponse';
import {IHomeOrder} from '../interface/i-home-order';
import {LinkAPIService} from './link-api.service';


@Injectable({
  providedIn: 'root'
})
export class HostService {
  constructor(private http: HttpClient,
              private url: LinkAPIService) {
  }
  createHome(home: Partial<IHome>): Observable<IHome> {
    return this.http.post<IHome>(`${this.url.link}/api/host/createHouse`, home);
  }
  getAllHomeOfHost(idHost: number): Observable<HomeHost[]> {
    console.log(idHost);
    return this.http.get<HomeHost[]>(`${this.url.link}/api/guest/host/${idHost}`);
  }

  getHomebyId(id: number): Observable<HomeHost> {
    return this.http.get<HomeHost>(`${this.url.link}/api/guest/${id}`);
  }

  updateStatusHome(status: StatusSetByHost): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url.link}/api/status/set`, status);
  }
  getAllBookListOneHouseById(id: number): Observable<IHomeOrder[]> {
    return this.http.get<IHomeOrder[]>(`${this.url.link}/api/host/listOrder/${id}`);
  }

  setStatus(houseId: number): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(`${this.url.link}/api/host/done/${houseId}`, houseId);
  }
  setCancel(houseId: number): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url.link}/api/order/delete/${houseId}`, houseId);
  }
}
