import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IHomeOrder} from '../../../interface/i-home-order';
import {HostService} from '../../../service/host.service';

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
              private hostService: HostService) { }

  ngOnInit() {
    this.houseId = +this.route.snapshot.paramMap.get('id');
    this.hostService.getAllBookListOneHouseById(this.houseId).subscribe(
      next => {
        this.booklist = next;
        this.message = 'thanh cong';
        console.log(this.booklist);
      }, error3 => { this.message = 'khong thanh cong'; }
    );
  }

}
