import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {RoleService} from './service/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private user: number;
  private message = '';

  constructor(private tokenStorage: TokenStorageService,
              private role: RoleService) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'ban da dang xuat';
  }

// console.log(value);
  ngOnInit() {
    // this.role.getRole().subscribe(next => {
    //   this.tokenStorage.saveAuthorities(next.name);
    //   this.user = next.id;
    //   this.role.user = next.id;
    //   this.message = 'Lay duoc role';
    //   console.log(this.role.getRole());
    // }, error => this.message = 'khong lay dk role');
  }
}

