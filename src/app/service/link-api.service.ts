import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkAPIService {
  public link = 'https://backendbnb.herokuapp.com';
  constructor() { }
}
