import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;

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
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
