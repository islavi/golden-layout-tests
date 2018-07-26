import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@services/users.service';
import { AlertService } from '@services/alert.service';
import { User } from '@models/users.model';
import { NotificationService } from '@services/notification.service';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private usersService: UsersService,
        private alertService: AlertService,
        private notificationService: NotificationService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.usersService.register(this.registerForm.value)
            .then((user: User) => {
                this.notificationService.showNotification('success', 'Create user', `User ${user.firstName} ${user.lastName} was created`);
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            })
            .catch((error) => {
                this.notificationService.showNotification('error', 'Create user', `Error creating user, please try again later!`);
                this.alertService.error(error);
                this.loading = false;
            });

    }
}
