import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'app-signup-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.form.get("account.username");
  }

  get password() {
    return this.form.get("account.password");
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}

