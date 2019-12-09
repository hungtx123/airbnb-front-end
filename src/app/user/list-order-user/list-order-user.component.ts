import { Component, OnInit } from '@angular/core';
import {IHomeOrder} from '../../interface/i-home-order';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-order-user',
  templateUrl: './list-order-user.component.html',
  styleUrls: ['./list-order-user.component.scss']
})
export class ListOrderUserComponent implements OnInit {
  orderlist: IHomeOrder[];
  message: string;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.listAllOrderByUser().subscribe(
      next => {
        this.orderlist = next;
      }, (error: HttpErrorResponse) => {
        if ( error.status === 400) {
          this.message = error.error;
        } else if (error.status === 200) {
          this.message = error.error.text;
        }
      }
    );
  }

  deny(id) {
    this.userService.setCancel(id).subscribe(
      next => {
        this.userService.listAllOrderByUser().subscribe(
          next2 => {
            this.orderlist = next2;
            this.message = 'thanh cong';
            console.log(next2);
            console.log(this.orderlist);
          }, (error: HttpErrorResponse) => {
            if ( error.status === 400) {
              this.message = error.error;
            } else if (error.status === 200) {
              this.message = error.error.text;
            }
          }
        );
        console.log('set trang thai thanh cong');
      }, (error4: HttpErrorResponse) => {
        if (error4.status === 400) {
          this.message = error4.error;
        } else if (error4.status === 200) {
          this.message = error4.error.text;
        }}
    );
  }
}
