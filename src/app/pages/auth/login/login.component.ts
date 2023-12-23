import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'pm-login',
  standalone: true,
  // Importing necessary modules
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html', // Template file
  styleUrl: './login.component.scss' // Style file
})
export class LoginComponent {
  router: Router; // Router instance

  loginForm: FormGroup; // Form group for login

  constructor(private formBuilder: FormBuilder, private routerService: Router) {
    this.router = routerService; // Initialize router instance

    // Creating the form structure using FormBuilder
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(2147483647)
      ]]
    });
  }

  // Method to navigate to the registration page
  navigateToRegister() {
    this.router.navigate(['auth/register']);
  }

  // Method to handle form submission
  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // Log form values if valid (to debug)
    } else {
    }
  }
}
