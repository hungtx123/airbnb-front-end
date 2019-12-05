import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';
import {IHomeOrder} from '../../../interface/i-home-order';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-income-month',
  templateUrl: './income-month.component.html',
  styleUrls: ['./income-month.component.scss']
})
export class IncomeMonthComponent implements OnInit {
  houseId: number;
  orderlist: IHomeOrder[];
  orderTime: FormGroup;
  month: number;
  year: number;
  message: string;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private hostService: HostService) {
  }

  ngOnInit() {
    this.houseId = +this.route.snapshot.paramMap.get('id');
    this.orderTime = this.fb.group({
      month: ['', [Validators.required]],
      year: ''
    });
  };

  calculate() {
    this.houseId = +this.route.snapshot.paramMap.get('id');
    if (this.orderTime.valid) {
      const {value} = this.orderTime;
      console.log(value);
      this.hostService.getIncomePerMonth(this.houseId).subscribe(
        next => {
          console.log('set income thanh cong');
        },
        error => {
          console.log('set income k thanh cong');
        }
      );
    }
  }

}
