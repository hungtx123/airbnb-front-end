import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUpload} from '../interface/FileUpload';
import {HomeImageService} from '../service/home-image.service';
import {HostService} from '../service/host.service';
import {TokenStorageService} from '../auth/token-storage.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html',
  styleUrls: ['./create-home.component.scss']
})
export class CreateHomeComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  formGroup: FormGroup;
  message: string;
  imgArr: string[];
  constructor(private homeService: HostService,
              private fb: FormBuilder,
              public uploadService: HomeImageService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      houseName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bedroomNumber: ['', [Validators.required, Validators.min(0)]],
      bathroomNumber: ['', [Validators.required, Validators.min(0)]],
      area: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', [Validators.required]],
      imageUrls: null
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formGroup.patchValue( {imageUrls: this.uploadService.image.slice(9).trim()});
      const {value} = this.formGroup;
      console.log(value);
      switch (value.category) {
        case 1:
          value.category = { name: 'Hotel'};
          break;
        case 2:
          value.category = { name: 'House'};
          break;
        case 3:
          value.category = { name: 'Resort'};
          break;
        case 4:
          value.category = { name: 'Villa'};
          break;
        default:
          value.category = { name: 'House'};
          break;
      }
      this.homeService.createHome(value)
        .subscribe(next => {
          console.log('Thanh cong');
          this.uploadService.image = 'undefined';
          }, (error: HttpErrorResponse) => {
          if (error.status === 200) {
            this.message = error.error.text;
          } else {
            this.message = 'Tạo không thành công';
          }
        });
    }
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
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
