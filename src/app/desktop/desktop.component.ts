import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  private message = '';

  constructor(private tokenStorage: TokenStorageService,
              private profileService: ProfileService) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'Bạn đã đăng xuất';
  }

  ngOnInit() {
    this.profileService.getOneAccToken().subscribe(next2 => {
      console.log('vao day chua');
      console.log(next2);
      this.tokenStorage.saveAuthorities(next2.role[0].name);
      this.tokenStorage.saveEmail(next2.email);
      console.log(next2.role[0]);
    }, error => {this.message = 'Hết phiên đăng nhập vui lòng đăng nhập lại'; });

  }
}
