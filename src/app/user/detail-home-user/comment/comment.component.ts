import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {HostService} from '../../../service/host.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup;
  comments: string;

  constructor(private userService: UserService,
              private hostService: HostService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      house: '',
      comment: '',
      rate: ''
    });
    const id = +this.route.snapshot.paramMap.get('id');
  }

  comment() {
    if (this.commentForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.commentForm.patchValue({house: {id: id}});
      const {value} = this.commentForm;
      this.userService.comment(value).subscribe(
        next => {
          this.hostService.getListComment(id).subscribe(next2 => {
              this.comments = next2;
              console.log('comment thanh cong');
            }, error => {
              console.log('comment k thanh cong');
            }
          );
        });
    }
  }
}
