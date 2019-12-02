import { Component, OnInit } from '@angular/core';
// import {IHome} from '../../interface/i-home';
import {HostService} from '../../service/host.service';
// import {error} from 'util';
import {ProfileService} from '../../service/profile.service';
import {HomeHost} from '../../interface/home-host';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {
  output: HomeHost[];
  info: HomeHost;
  message: string;
  idHost: number;
  constructor(private hostService: HostService, private profileService: ProfileService
  ) {}
  ngOnInit() {
    this.profileService.getOneAccToken().subscribe(
      next => {
        this.idHost = next.id;
        console.log( this.idHost);
        this.hostService.getAllHomeOfHost(next.id).subscribe(next2 => {
          this.output = next2;
        }, error1 => this.message = 'khong thanh cong');
      });
  }

}
