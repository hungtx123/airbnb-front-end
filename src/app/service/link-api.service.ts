import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkAPIService {
  public link = 'http://localhost:8080';
  constructor() { }
}
