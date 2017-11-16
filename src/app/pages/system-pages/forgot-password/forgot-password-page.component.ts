import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Auth Service
import { AuthService } from '../../../core/auth.service';

// Sweet alerts notifications
import swal from 'sweetalert2';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f') forogtPasswordForm: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) { }

    // On submit click, reset form fields
    onSubmit() {
        const email: string = this.forogtPasswordForm.value.inputEmail;

        this.acAuth.afAuth.auth.sendPasswordResetEmail(email)
        .then(() => {
            swal('Email sent successfully!', 'Now just check your email.', 'success').then( () => {
                this.router.navigate(['/login'], { relativeTo: this.route.parent });
            });

        })
        .catch(e => {
            // We inform the user that something went wrong
            swal('Something went wrong.', e.message, 'error');
        });
    }
}
