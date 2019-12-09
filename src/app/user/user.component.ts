import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,
              public tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.router.navigate(['user/list-home']);
  }

}
