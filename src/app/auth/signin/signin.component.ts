import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinRef') signinRef: NgForm;
  signin: FormGroup;

  constructor(private fb: FormBuilder) {}

  get user() {
    return this.signin.get('user');
  }
  set user(val: any) {
    this.user.setValue(val);
  }
  get pass() {
    return this.signin.get('pass');
  }
  set pass(val: any) {
    this.pass.setValue(val);
  }

  ngOnInit() {
    this.signin = this.fb.group({
      user: [null, [Validators.required, Validators.email]],
      pass: [null, [Validators.required]],
    });
  }

  onFocus(el: any) {
    el.classList.add('form__group--active');
  }

  onBlur(el: any, inputVal: FormControl) {
    if (!(inputVal.value && inputVal.valid)) {
      el.classList.remove('form__group--active');
    }
  }
}
