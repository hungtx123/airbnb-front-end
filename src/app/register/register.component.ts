import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../service/account.service';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: string;
  constructor(private accService: AccountService,
              private fb: FormBuilder) {
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: '',
      role: ['user'],
    }, {validator: comparePassword});
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {value} = this.registerForm;
      console.log(value.role);
      switch (value.role) {
        case '1':
          value.role = ['user'];
          break;
        case '2':
          value.role = ['host'];
          break;
        default:
          value.role = ['user'];
          break;
      }
      console.log(value);
      this.accService.createAcc(value)
        .subscribe(next => {
          console.log(next);
          this.message = 'Tạo thành công';
          this.registerForm.reset({
            email: '',
            password: '',
          });
        }, error => this.message = 'Tạo không thành công' ) ;
    }
  }

}
