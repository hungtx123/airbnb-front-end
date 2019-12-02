import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ProfileService} from '../../../service/profile.service';
import {StatusListUser} from '../../../interface/StatusListUser';

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
      this.userService.orderHome(value).pipe()
        .subscribe(() => {
          this.message = 'Cap nhat thanh cong';
        }, error => this.message = 'Cap nhat khong thành công' ) ;
    }
  }

  // checkDateOder(next: StatusListUser[]) {
  //   // tslint:disable-next-line:prefer-const
  //   let next2: StatusListUser[];
  //   let Now1;
  //   let Now2;
  //   let Now3;
  //   let m1;
  //   let m2;
  //   let m3;
  //   const month1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  //   const month2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 28];
  //   const month4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 30];
  //   const month = next[0].beginDate.split('-');
  //   const listMonth = [0, month1, month2, month1, month4, month1, month4, month1, month1, month4, month1, month4, month1];
  //   // tslint:disable-next-line:radix
  //   const a = parseInt(month[1]);
  //   if (a === 12) {
  //     Now1 = 12;
  //     Now2 = 1;
  //     Now3 = 2;
  //     m1 = listMonth[12];
  //     m2 = listMonth [1];
  //     m3 = listMonth[2];
  //   } else if (a === 11) {
  //     Now1 = 11;
  //     Now2 = 12;
  //     Now3 = 1;
  //     m1 = listMonth[11];
  //     m2 = listMonth [12];
  //     m3 = listMonth[1];
  //   } else {
  //     Now1 = a;
  //     Now2 = a + 1;
  //     Now3 = a + 2;
  //     m1 = listMonth[Now1];
  //     m2 = listMonth [Now2];
  //     m3 = listMonth[Now3];
  //   }
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < next.length; i++) {
  //     if (next[i].status.id === 2) {
  //       next2.push(next[i]);
  //     }
  //   }
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < next2.length; i++) {
  //     const beginDate = next2[i].beginDate.split('-');
  //     const endDate = next2[i].endDate.split('-');
  //     // tslint:disable-next-line:radix
  //     const x = parseInt(beginDate[1]);
  //     // tslint:disable-next-line:radix
  //     const y = parseInt(beginDate[2]);
  //     // tslint:disable-next-line:radix
  //     const c = parseInt(endDate[1]);
  //     // tslint:disable-next-line:radix
  //     const b = parseInt(endDate[2]);
  //     if (y < b) {
  //       for (let j = y; j < b; j ++) {
  //         listMonth[x][i] = ' ';
  //       }
  //     } else if (y > b) {
  //       for (let j = y; j <= 31; j ++) {
  //         listMonth[x][i] = ' ';
  //       }
  //       for (let j = 1; j <= b; j ++) {
  //         listMonth[c][i] = ' ';
  //       }
  //     }
  //   }
  // }
}
