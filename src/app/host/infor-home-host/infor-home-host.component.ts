import { Component, OnInit } from '@angular/core';
import {HostService} from '../../service/host.service';
import {ActivatedRoute} from '@angular/router';
import {HomeHost} from '../../interface/home-host';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-infor-home-host',
  templateUrl: './infor-home-host.component.html',
  styleUrls: ['./infor-home-host.component.scss']
})
export class InforHomeHostComponent implements OnInit {
  item: HomeHost;
  image: any;
  private message: string;
  statusHomeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private hostService: HostService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.statusHomeForm = this.fb.group({
      house: '',
      beginDate: '',
      endDate: '',
      status: '',
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getHomebyId(id).subscribe(
      next => {
        this.item = next;
        this.image = next.imageUrls.split(' ');
        console.log(this.image);
      }, error3 => { this.message = 'không tồn tại'; }
    );
  }

  onSubmit() {
    if (this.statusHomeForm.valid) {
      this.statusHomeForm.patchValue({ house: {id: this.item.id}});
      const {value} = this.statusHomeForm;
      console.log(value.status);
      switch (value.status) {
        case '1':
          value.status = { name: 'AVAILABLE'};
          break;
        case '2':
          value.status = { name: 'BOOKED'};
          break;
        default:
          value.status = { name: 'AVAILABLE'};
          break;
      }
      console.log(value);
      this.hostService.updateStatusHome(value)
        .subscribe(next => {
          console.log(next);
          this.message = 'Cập nhật thành công';
        }, error => this.message = 'Cập nhật không thành công' ) ;
    }
  }

  // formatDate(date) {
  //   const from = date.split('-');
  //   const f = new Date(from[2], from[1], from[0]);
  //   const dateNew = f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate();
  // }
}
