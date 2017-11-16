
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';

// Feature Modules
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { HomeLandingPageLayoutComponent } from './layouts/home-landing-page/home-landing-page-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { SystemLayoutComponent } from './layouts/system/system-layout.component';

import { CustomOption } from './shared/toastr/custom-option';

// Firebase dependencies
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import * as $ from 'jquery';


@NgModule({
    declarations: [
        AppComponent,
        HomeLandingPageLayoutComponent,
        FullLayoutComponent,
        SystemLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        // Toastr providers
        { provide: ToastOptions, useClass: CustomOption }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
