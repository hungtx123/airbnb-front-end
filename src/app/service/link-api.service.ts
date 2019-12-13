import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkAPIService {
  public link = 'https://bnb-http-be.herokuapp.com';
  constructor() { }
}
