import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../interface/home-host';
import {UserService} from '../service/user.service';
import {AccountService} from '../service/account.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-homestay',
  templateUrl: './homestay.component.html',
  styleUrls: ['./homestay.component.scss']
})
export class HomestayComponent implements OnInit {
  locForm: FormGroup;
  output: HomeHost[];

  constructor(private userService: UserService,
              private search: AccountService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.locForm = this.fb.group({
      bedroomNumber: '',
      bathroomNumber: '',
      price: '',
      address: '',
      beginDate: '',
      endDate: '',
    });
    this.userService.getAllHome().subscribe(next => {
    this.output = next;
  }, error => console.log('lay danh sach nha chua loc khong thanh cong'));
  }

  onSubmit() {
    if (this.locForm.valid) {
      const {value} = this.locForm;
      this.search.searchHomeStay(value).subscribe(next => {
      this.output = next;
      console.log('thanh cong, lay duoc nha');
      }, error => console.log('search khong thanh cong'));
    }
  }
}
