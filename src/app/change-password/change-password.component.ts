import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../service/profile.service';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  passForm: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    ;
  }
  editMember() {
    this.profileService.updatePass(this.passForm.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
