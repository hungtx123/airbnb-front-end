import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../interface/home-host';
import {AccountService} from '../service/account.service';
import {ISearch} from '../interface/i-search';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-home-guest',
  templateUrl: './search-home-guest.component.html',
  styleUrls: ['./search-home-guest.component.scss']
})
export class SearchHomeGuestComponent implements OnInit {
  output: HomeHost[];
  search: FormGroup;
  message: string;
  constructor(public accountService: AccountService,
              public fb: FormBuilder) { }

  ngOnInit() {
    this.search = this.fb.group({
      address: ''
    });
    console.log('day la :' + this.accountService.address);
    this.search.patchValue({address: this.accountService.address});
    console.log(this.accountService.address);
    const {value} = this.search;
    this.accountService.searchHomeStay(value).subscribe(next => {
      this.output = next;
      console.log('thanh cong, lay duoc nha');
    }, error => console.log('search khong thanh cong'));

  }
}
