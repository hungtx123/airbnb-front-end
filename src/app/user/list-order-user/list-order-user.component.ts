import { Component, OnInit } from '@angular/core';
import {IHomeOrder} from '../../interface/i-home-order';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';

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
        console.log(next);
        console.log('lay danh sach order thanh cong');
      }, error => {
        console.log('lay ds k thanh cong');
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
          }, error3 => {
            this.message = 'khong thanh cong';
          }
        );
        console.log('set trang thai thanh cong');
      }, error4 => {
        console.log('set trang thai k thanh cong');
      }
    );
  }
}
