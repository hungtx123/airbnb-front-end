import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../../interface/home-host';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-list-home-user',
  templateUrl: './list-home-user.component.html',
  styleUrls: ['./list-home-user.component.scss']
})
export class ListHomeUserComponent implements OnInit {
  output: HomeHost[];
  message: string;
  constructor(private userService: UserService) { }

  ngOnInit() {this.userService.getAllHome().subscribe(next2 => {
    this.output = next2;
    console.log(next2);
  }, error1 => this.message = 'khong thanh cong');
  }
}
