import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IProfile} from '../interface/i-profile';
import {ProfileService} from '../service/profile.service';
import {FileUpload} from '../interface/FileUpload';
import {UploadFileService} from '../service/upload-file.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  acc: IProfile;
  data: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private profileService: ProfileService,
              private tokenStorageService: TokenStorageService,
              private uploadService: UploadFileService) { }

  ngOnInit() {
    this.data = this.fb.group({
      token: '',
      name: '',
      phone: '',
      address: '',
      avatar: null
    })
    ;
    this.profileService.getOneAccToken().subscribe(
      next => {
        this.acc = next;
        this.data.patchValue(this.acc);
      },
      error => {
        this.acc = null;
      }
    );
  }
  editMember() {
    this.data.patchValue({ avatar: this.uploadService.image});
    this.profileService.updateAcc(this.data.value).subscribe(next => {
      console.log(this.data.value);
      this.message = 'Update success';
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    console.log(this.currentFileUpload);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

}
