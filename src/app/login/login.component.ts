import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {RoleService} from '../service/role.service';
import {Router} from '@angular/router';
import {ProfileService} from '../service/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;
  message: string;
  id: number;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private profileService: ProfileService,
    private  router: Router) {
  }
  ngOnInit() {
    this.profileService.getOneAccToken().subscribe(next => {
      this.isLoggedIn = true;
      console.log('lay duoc profile');
    }, error => this.isLoggedIn = false ) ;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.tokenStorage.saveToken(this.tokenStorage.getTokenCookies());
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const {value} = this.loginForm;
      console.log(value);
      this.authService.attemptAuth(value)
        .subscribe(next => {
          console.log(next);
          this.tokenStorage.saveToken(next.accessToken);
          this.isLoggedIn = true;
          this.message = 'Thành công';
          this.profileService.getOneAccToken().subscribe(next2 => {
            console.log('vao day chua');
            console.log(next2);
            this.tokenStorage.saveAuthorities(next2.role[0].name);
            this.tokenStorage.saveEmail(next2.email);
            console.log(next2.role[0]);
            switch (next2.role[0].id) {
              case 1:
                console.log('da vao day');
                this.router.navigate(['user']);
                break;
              case 2:
                this.router.navigate(['host']);
                break;
              case 3:
                this.router.navigate(['admin']);
                break;
              default:
                this.router.navigate(['user']);
                break;
            }
            console.log('lay duoc profile');
          }, error => console.log('lay duoc profile') ) ;
        }, error => this.message = 'Lỗi đăng nhập, sai email hoặc mật khẩu, vui lòng nhập lại');
    }
  }
}
