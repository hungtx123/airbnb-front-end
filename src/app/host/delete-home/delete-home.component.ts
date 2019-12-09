import { Component, OnInit } from '@angular/core';
import {HostService} from '../../service/host.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-delete-home',
  templateUrl: './delete-home.component.html',
  styleUrls: ['./delete-home.component.scss']
})
export class DeleteHomeComponent implements OnInit {
  message: string;

  constructor(
    private route: ActivatedRoute,
    private hostService: HostService,
    private tokenStorageService: TokenStorageService,
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
  }

  onsubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.deleteHome(id).subscribe(() => {
      console.log('Xoa thanh cong')
    }, error => {console.log('Xoa k thanh cong')});

  }
}
