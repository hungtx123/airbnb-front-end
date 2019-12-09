import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../../../interface/home-host';
import {UserService} from '../../../service/user.service';
import {IComment} from '../../../interface/i-comment';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
  comments: string;
  info: IComment;
  message: string;

  constructor(private hostService: HostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getListComment(id).subscribe(next => {
    this.comments = next;
    console.log('lay cmt thanh cong')
  }, error1 => this.message = 'khong thanh cong');
  }


}
