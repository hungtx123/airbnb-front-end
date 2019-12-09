import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ProfileService} from '../service/profile.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountService} from '../service/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  private message = '';
  formGroup: FormGroup;

  constructor(private tokenStorage: TokenStorageService,
              private profileService: ProfileService,
              private fb: FormBuilder,
              public acc: AccountService,
              private  router: Router) {
  }

  logout() {
    this.tokenStorage.signOut();
    this.message = 'Bạn đã đăng xuất';
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      address: ''
    });
    this.profileService.getOneAccToken().subscribe(next2 => {
      console.log('vao day chua');
      console.log(next2);
      this.tokenStorage.saveAuthorities(next2.role[0].name);
      this.tokenStorage.saveEmail(next2.email);
      console.log(next2.role[0]);
    }, error => {this.message = 'Hết phiên đăng nhập vui lòng đăng nhập lại'; });

  }

  onSubmit() {
    const {value} = this.formGroup;
    console.log(value);
    this.acc.address = value.address;
    console.log(value.address);
    this.router.navigate(['searchHome2']);
  }
}
