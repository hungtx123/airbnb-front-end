import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {IComment} from '../../../interface/i-comment';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';
import {IListComment} from '../../../interface/i-listComment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

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
    this.getListComment(id);
  }

  comment() {
    if (this.commentForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.commentForm.patchValue( {house: {id}});
      const{value} = this.commentForm;
      this.userService.comment(value).subscribe(
        next => {
          this.getListComment(id);
          this.commentForm.patchValue({ comment: ''});
          this.commentForm.patchValue({ rate: ''});
        }, (error: HttpErrorResponse) => {
          if (error.status === 201) {
            this.message = error.error.text;
          } else {
            this.message = 'comment không thành công.';
          }} );
    }
  }
  getListComment(id) {
    this.hostService.getListComment(id).subscribe(next => {
      this.comments = next;
      console.log('lay cmt thanh cong');
    }, (error1: HttpErrorResponse) => {
      if (error1.status === 200) {
        console.log('lay cm thanh cong');
      } else if (error1.status === 404) {
        this.message = error1.error;
        console.log('khong lay duoc mesagge');
      }
    });
  }
}
