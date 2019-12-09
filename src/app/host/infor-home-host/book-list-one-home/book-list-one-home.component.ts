import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IHomeOrder} from '../../../interface/i-home-order';
import {HostService} from '../../../service/host.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-book-list-one-home',
  templateUrl: './book-list-one-home.component.html',
  styleUrls: ['./book-list-one-home.component.scss']
})
export class BookListOneHomeComponent implements OnInit {
  houseId: number;
  booklist: IHomeOrder[];
  message: string;
  constructor(private route: ActivatedRoute,
              private hostService: HostService,
              private router: Router) { }

  ngOnInit() {
    this.houseId = +this.route.snapshot.paramMap.get('id');
    this.hostService.getAllBookListOneHouseById(this.houseId).subscribe(
      next => {
        this.booklist = next;
        console.log(next);
        console.log(this.booklist);
      }, (error3: HttpErrorResponse) => {
        if (error3.status === 404) {
          this.message = error3.error;
        } }
    );
  }

  accept(id) {
    this.hostService.setStatus(id).subscribe(
      next => {
        this.hostService.getAllBookListOneHouseById(this.houseId).subscribe(
          next2 => {
            this.booklist = next2;
          }, (error3: HttpErrorResponse) => {
            if (error3.status === 404) {
              this.message = error3.error;
            } else if (error3.status === 200) {
              this.message = error3.error.text;
            }
            }
        );
        console.log('set trang thai thanh cong');
      }, error4 => {console.log('set trang thai k thanh cong'); }
    );
  }

  deny(id) {
    this.hostService.setCancel(id).subscribe(
      next => {
        this.hostService.getAllBookListOneHouseById(this.houseId).subscribe(
        next2 => {
          this.booklist = next2;
        }, error3 => { console.log('khong thanh cong'); }
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
