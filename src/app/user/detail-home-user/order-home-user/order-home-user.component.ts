import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../../service/profile.service';
import {StatusListUser} from '../../../interface/StatusListUser';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-order-home-user',
  templateUrl: './order-home-user.component.html',
  styleUrls: ['./order-home-user.component.scss']
})
export class OrderHomeUserComponent implements OnInit {
  orderForm: FormGroup;
  listTimeOrder: StatusListUser[];
  message: string;
  houseId: number;
  tenatId: number;
  constructor(private userService: UserService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.houseId = +this.route.snapshot.paramMap.get('id');
    this.userService.listTimeOrderHome(this.houseId).subscribe(
      next => {
        this.listTimeOrder = next;
        console.log('lay duoc danh sach oder');
      }, error => { console.log('khong lay duoc danh sach order');  }
    );
    this.profileService.getOneAccToken().subscribe(
      next => {
        this.tenatId = next.id;
      },
      error => {
        this.tenatId = null;
      }
    );
    this.orderForm = this.fb.group({
      house: '',
      tenant: '',
      checkin: ['', [Validators.required]],
      checkout: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.orderForm.patchValue(
        { house: {id: this.houseId}, tenant: {id: this.tenatId},
        });
      const {value} = this.orderForm;
      console.log(value);
      this.userService.orderHome(value)
        .subscribe(next => {
          console.log(next);
        }, (error: HttpErrorResponse) => {
          if (error.status === 200) {
            this.message = error.error.text;
          } else if (error.status === 400) {
            this.message = error.error;
          }
        } ) ;
    }
  }
}
