import { Component, ViewChild, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Auth Service
import { AuthService, User } from '../../../core/auth.service';

// Sweet alerts notifications
import swal from 'sweetalert2';

@Component({
    selector: 'app-lock-screen-page',
    templateUrl: './lock-screen-page.component.html',
    styleUrls: ['./lock-screen-page.component.scss']
})

export class LockScreenPageComponent implements OnInit {

    user = new User ('', 'assets/img/portrait/avatars/avatar-03.png');

    problem_title: Observable<string>;
    solution: Observable<string>;
    action: Observable<string>;

    redirectUrl: Observable<string>;

    constructor(
        private acAuth: AuthService,  // Angular Crewnie Authentication
        private route: ActivatedRoute,
        private router: Router,
    ) { this.user.emailVerified = false; }

    ngOnInit() {

        this.acAuth.afAuth.auth.onAuthStateChanged( user => {
            console.log('Hubo un cambio en el onInit onAuthStateChanged');

            if (user) {
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL || this.user.photoURL;
                this.user.emailVerified = user.emailVerified;
            } else {

            }
        });

        this.acAuth.afAuth.authState.subscribe(user => {
            console.log('Hubo un cambio en el estado onInit de usuario observable de usuario');
            console.log(user);

            if (user) {
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL || this.user.photoURL;
                this.user.emailVerified = user.emailVerified;

            } else {

            }
        });

        // Capture the session problem_title if available
        this.problem_title = this.route
        .queryParamMap
        .map(params => params.get('problem_title') || 'None');

        // Capture the session solution if available
        this.solution = this.route
        .queryParamMap
        .map(params => params.get('solution') || 'None');

        // Capture the session action if available
        this.action = this.route
        .queryParamMap
        .map(params => params.get('action') || 'None');

         // Capture the session action if available
         this.redirectUrl = this.route
         .queryParamMap
         .map(params => params.get('url') || '/me');

    }

    onResendEmailVerification() {
        this.acAuth.afAuth.auth.currentUser.sendEmailVerification()
        .then( () => {
            swal('Verification email re sended', 'Please check your email and open the verification link.', 'success')
            .then( () => { }, dismiss => { } ); // to avoid errors in console
        })
        .catch(e => {
            swal('Something went wrong.', e.message, 'error');
        });
    }

    onReady() {
        this.acAuth.afAuth.auth.onAuthStateChanged( user => {
            console.log('Actualización de cambio on Ready en el onAuthStateChanged');
            console.log(user);

            if (user) {
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL || this.user.photoURL;
                this.user.emailVerified = user.emailVerified;
            } else {

            }
        });

        this.acAuth.afAuth.authState.map(user => {
            console.log('Actualización de cambio on Ready en el estado de usuario observable de usuario');
            console.log(user);
            if (user) {
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL || this.user.photoURL;
                this.user.emailVerified = user.emailVerified;
            } else {

            }
        });
    }

    onLogout() {
        this.acAuth.logout();
        console.log('Now you are log out');
    }

}

