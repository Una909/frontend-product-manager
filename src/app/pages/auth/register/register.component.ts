import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]],
      street: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]],
      zip: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      city: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]],
      country: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ]],
      phone: ['', [
        Validators.minLength(0),
        Validators.maxLength(15)
      ]],
      mobilePhone: ['', [
        Validators.minLength(0),
        Validators.maxLength(15)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(2147483647),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')
      ]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
    }
  }
}
