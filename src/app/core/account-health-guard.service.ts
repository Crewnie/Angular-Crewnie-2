import { Injectable } from '@angular/core';
import {
    CanActivate, CanLoad,
    CanActivateChild,
    Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    NavigationExtras
  } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Auth Service
import { AuthService } from '../core/auth.service';

@Injectable()
export class AccountHealthGuard implements CanActivate, CanLoad {

    constructor(
        private router: Router,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        return true;
    }

    canLoad( route: Route ): Observable<boolean> {

        return this.acAuth.afAuth.authState.map(user => {
            if (!user) {
                const navigationExtras = {
                    queryParams: {
                        'url': route.path,
                        queryParamsHandling: 'preserve'
                    }
                };
                this.router.navigate(['/login'], navigationExtras);
                return false;
            } else {
            };
            if ( this.isEmailValidated( user.emailVerified ) ) {
                return true;
            } else {
                return false;
            };
        }).first();

      }

    isEmailValidated( emailVerified ) {
        let navigationExtras: NavigationExtras;

        if (!emailVerified) {
            navigationExtras = {
                queryParams: {
                    'problem_title': 'Please validate your email',
                    'solution': 'Please check your email, and click on the validation link to activate your account.',
                    'action': 'Resend verification code',
                    queryParamsHandling: 'preserve'
                }
            };
            this.router.navigate(['/waiting-for'], navigationExtras);
            return false;
        } else {
            return true;
        }
    }
    isRegistrationFinished() {
        return true;
    }
}

@Injectable()
export class IsLoginGuard implements CanActivateChild {

    constructor(
        private router: Router,
        private acAuth: AuthService  // Angular Crewnie Authentication
    ) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
        console.log('AuthGuard#canActivateChild called');

        return this.acAuth.afAuth.authState.map( firebaseUser => {
            if (!!firebaseUser) {
                this.acAuth.toastr.info('You will be redirected to the action.', 'You are already inside!');
                this.router.navigate(['/me']);
                return false
            } else {
                return true;
            }
        })
        .first();
    }
}
