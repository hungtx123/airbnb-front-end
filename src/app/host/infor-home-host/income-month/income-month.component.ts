import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MonthForm} from '../../../interface/MonthForm';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-income-month',
  templateUrl: './income-month.component.html',
  styleUrls: ['./income-month.component.scss']
})
export class IncomeMonthComponent implements OnInit {
  private message: string;
  incomePerMonthForm: FormGroup;
  income: number;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private hostService: HostService) {
  }

  ngOnInit() {
    this.incomePerMonthForm = this.fb.group({
      month: '',
      year: '',
    });
    const id = +this.route.snapshot.paramMap.get('id');
  }

  calculate() {
    if (this.incomePerMonthForm.valid) {
      const {value} = this.incomePerMonthForm;
      console.log(this.incomePerMonthForm);
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getIncomePerMonth(id, value).subscribe(
      next => {
        this.income = next;
        this.message = 'lay thanh cong'
        console.log('tinh thanh cong')
      }, error => {console.log('k thanh cong')});
  }

  }
}
