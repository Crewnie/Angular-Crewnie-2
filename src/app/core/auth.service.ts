import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Observable } from 'rxjs/Observable';

export class User {
    public emailVerified: boolean;

    constructor(
        public displayName,
        public photoURL
    ) { }
  }

@Injectable()
export class AuthService {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public afAuth: AngularFireAuth,
        public toastr: ToastsManager
    ) {    }

    loginUserWithEmailAndPassword(email: string, password: string, persistence: any, url: string) {
        if (persistence) {
            this.afAuth.auth.setPersistence('local').catch(e => {
                console.log('Error code: ' + e.code + ', error message: ' + e.message);
            });
        }
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // tslint:disable-next-line:quotemark
            this.toastr.success("Now, let's go to the action.", 'Good job!');
            this.router.navigate([url], { relativeTo: this.route.parent });
        })
        .catch(e => {
            // We inform the user that something went wrong with their registration
            this.toastr.error(e.message, 'Something went wrong:');
        });
        // return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        // tslint:disable-next-line:quotemark
        this.toastr.warning('Getting out is security too.', "You're out!");
        return this.afAuth.auth.signOut()
        .then(() => {
            this.router.navigate(['/login'], { relativeTo: this.route.parent });
        });
    }
}
