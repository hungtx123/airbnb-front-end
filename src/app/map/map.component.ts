import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {ProfileService} from '../service/profile.service';
import {Router} from '@angular/router';
import {HostService} from '../service/host.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   lat: number;
   lng: number;
  zoom: number;
  constructor(
    public map: HostService) {
  }
    ngOnInit() {
    this.lat = 16.0471659;
    this.lng = 108.1891961;
    this.zoom = 15;
  }
  mapClick(event) {
    // console.log(event);
  }

  mapDoubleClick(event) {
    console.log(event);
    this.map.lat = event.coords.lat.valueOf();
    console.log(event.coords.lat);
    console.log(this.map.lng);
    this.map.lng = event.coords.lng;
  }
}
