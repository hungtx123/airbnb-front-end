import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  private message = '';

  constructor(private tokenStorage: TokenStorageService) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'Bạn đã đăng xuất';
  }

  ngOnInit() {}
}
