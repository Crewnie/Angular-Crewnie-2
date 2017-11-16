import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Auth Service
import { AuthService } from '../../../core/auth.service';

// Sweet alerts notifications
import swal from 'sweetalert2';


@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
    @ViewChild('f') registerForm: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) {  }

    //  On submit click, the user registration process starts
    onSubmit() {

        const stageName: string = this.registerForm.value.sname;
        const email: string = this.registerForm.value.inputEmail;
        const password: string = this.registerForm.value.inputPass;

        // We set the register persistent.
        this.acAuth.afAuth.auth.setPersistence('local').catch(e => {
            console.log('Error code: ' + e.code + ', error message: ' + e.message);
        });

        this.acAuth.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(crewnieUser => {
                // We inform the user that their registration was correct.
                swal('Good job!', 'Now just check your email.', 'success').then( () => {
                    this.router.navigate(['/me'], { relativeTo: this.route.parent });
                }, dismiss => { });

                crewnieUser.updateProfile({
                    displayName: stageName,
                }).then( () => {
                    console.log('Update successful.');
                }).catch( () => {
                    // tslint:disable-next-line:quotemark
                    console.log("An error happened when we put the user's stage name.");
                });
                console.log(crewnieUser);
                crewnieUser.sendEmailVerification().then( () => {
                    console.log('Email sent successful.');
                  }).catch(function(error) {
                    console.log('An error happened when we send the verification email');
                  });
            })
            .catch(e => {
                 // We inform the user that something went wrong with their registration
                 swal('Something went wrong.', e.message, 'error');
            }
        );

    }
}
