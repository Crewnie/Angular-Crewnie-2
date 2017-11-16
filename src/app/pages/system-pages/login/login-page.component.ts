import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Auth Service
import { AuthService } from '../../../core/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private acAuth: AuthService  // Angular Crewnie Authentication
    ) { }

    // On submit button click
    onSubmit() {
      const email: string = this.loginForm.value.inputEmail;
      const password: string = this.loginForm.value.inputPass;
      const remember: boolean = this.loginForm.value.ckeckRemember;

      this.acAuth.loginUserWithEmailAndPassword(email, password, remember, 'me');

    }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}
