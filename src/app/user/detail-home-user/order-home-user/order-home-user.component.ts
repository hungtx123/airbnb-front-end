import { Component, OnInit } from '@angular/core';
import {Order} from '../../../interface/order';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../../service/account.service';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../../service/profile.service';

@Component({
  selector: 'app-order-home-user',
  templateUrl: './order-home-user.component.html',
  styleUrls: ['./order-home-user.component.scss']
})
export class OrderHomeUserComponent implements OnInit {
  orderForm: FormGroup;
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
      this.userService.orderHome(value).pipe()
        .subscribe(() => {
          this.message = 'Cap nhat thanh cong';
        }, error => this.message = 'Cap nhat khong thành công' ) ;
    }
  }
}
