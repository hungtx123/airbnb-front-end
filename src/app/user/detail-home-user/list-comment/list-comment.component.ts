import { Component, OnInit } from '@angular/core';
import {HomeHost} from '../../../interface/home-host';
import {UserService} from '../../../service/user.service';
import {IComment} from '../../../interface/i-comment';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';
import {IListComment} from '../../../interface/i-listComment';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
  comments: IListComment[];
  info: IComment;
  message: string;
  commentForm: FormGroup;

  constructor(private hostService: HostService,
              private route: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      house: '',
      comment: '',
      rate: ''
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.hostService.getListComment(id).subscribe(next => {
    this.comments = next;
    console.log('lay cmt thanh cong');
  }, error1 => this.message = 'khong thanh cong');
  }

  comment() {
    if (this.commentForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.commentForm.patchValue( {house: {id}});
      const{value} = this.commentForm;
      this.userService.comment(value).subscribe(
        next => { console.log('comment thanh cong');
                  this.hostService.getListComment(id).subscribe(next2 => {
                    console.log('hien list cmt moi');
                    this.comments = next2; } );
        }, error => {console.log('comment k thanh cong' ); } );
    }
  }


}
