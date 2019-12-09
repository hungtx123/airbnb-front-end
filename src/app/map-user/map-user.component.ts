import {Component, OnInit} from '@angular/core';
import {HostService} from '../service/host.service';
import {HomeHost} from '../interface/home-host';
import {IHome} from '../interface/i-home';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map-user',
  templateUrl: './map-user.component.html',
  styleUrls: ['./map-user.component.scss']
})
export class MapUserComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  homeHost: HomeHost;

  constructor(private route: ActivatedRoute,
              private hostService: HostService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHomebyId(id).subscribe(
      next => {
        this.homeHost = next;
        this.lat = this.homeHost.lat;
        console.log(this.homeHost.lat);
        this.lng = this.homeHost.lng;
        console.log(this.homeHost.lng);
        this.zoom = 15;
      }
    );
  }
}

