import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './auth/token-storage.service';
import {RoleService} from './service/role.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private user: number;
  private message = '';

  constructor(private tokenStorage: TokenStorageService,
              private  router: Router,
              private role: RoleService) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'ban da dang xuat';
  }
  ngOnInit() {
    this.router.navigate(['trangchu']);
    this.role.getRole().subscribe(next => {
      console.log(this.tokenStorage);
      this.tokenStorage.saveAuthorities(next.name);
      this.user = next.id;
      console.log('check duoc user');
    }, error => this.message = 'khong check duoc user');
  }
}

