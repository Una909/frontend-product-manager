import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {UserControllerService} from "../../../openapi-client";

@Component({
    selector: 'pm-register',
    standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, RouterLink, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})

export class RegisterComponent {

    registrationForm = new FormGroup({
        firstName: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)
        ]),
        lastName: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)
        ]),
        street: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)
        ]),
        zip: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10)
        ]),
        city: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(255)
        ]),
        country: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2)
        ]),
        phone: new FormControl<string>('', [
            Validators.minLength(0),
            Validators.maxLength(15)
        ]),
        mobilePhone: new FormControl<string>('', [
            Validators.minLength(0),
            Validators.maxLength(15)
        ]),
        email: new FormControl<string>('', [
            Validators.required,
            Validators.email
        ]),
        password: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(2147483647),
            Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+!=]).*$')
        ])
    });

    submit() {
        let firstName: string = this.registrationForm.value.firstName!;
        let lastName: string = this.registrationForm.value.lastName!;
        let street: string = this.registrationForm.value.street!;
        let zip: string = this.registrationForm.value.zip!;
        let city: string = this.registrationForm.value.city!;
        let country: string = this.registrationForm.value.country!;
        let phone: string = this.registrationForm.value.phone!;
        let mobilePhone: string = this.registrationForm.value.mobilePhone!;
        let email: string = this.registrationForm.value.email!;
        let password: string = this.registrationForm.value.password!;
        this.userService.register({
            firstName: firstName,
            lastName: lastName,
            street: street,
            zip: zip,
            city: city,
            country: country,
            phone: phone,
            mobilePhone: mobilePhone,
            email: email,
            password: password,
        }).subscribe(value => {
            this.router.navigateByUrl('auth/login')
        });
    }

    constructor(
        private readonly router: Router,
        private readonly userService: UserControllerService
    ) {
    }
}
