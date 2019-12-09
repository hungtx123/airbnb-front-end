import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../../interface/home-host';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../service/host.service';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-detail-home-user',
  templateUrl: './detail-home-user.component.html',
  styleUrls: ['./detail-home-user.component.scss']
})
export class DetailHomeUserComponent implements OnInit {
  item: HomeHost;
  img: string[];
  private message: string;
  constructor(private route: ActivatedRoute,
              private hostService: HostService,
              public tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHomebyId(id).subscribe(
      next => {
        this.item = next;
        this.img = this.item.imageUrls.split(' ');
      }, error => { this.message = 'không tồn tại'; }
    );
  }
}
