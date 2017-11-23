import { Component, OnInit } from '@angular/core';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// data base Service
import { DataBaseService } from './../../../../core/db/data-base.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
    selector: 'app-mt-wizard-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
})

export class PersonalComponent implements OnInit {

  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  colRef = this.afs.collection('crewnies');

  private itemDoc: AngularFirestoreDocument<Personal>;
  crewnie: Observable<Personal>;
  userFirebase: Observable<firebase.User>;
  flatMap: Observable<any>;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private formDataService: FormDataService,
    private workflowService: WorkflowService,
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) {    }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();

    this.userFirebase = this.afAuth.authState;
    this.userFirebase.subscribe( firebaseUser => {

      this.itemDoc = this.afs.doc< Personal>('crewnies/' + firebaseUser.uid);
      this.crewnie = this.itemDoc.valueChanges();
      this.crewnie.subscribe( val => {
        if ( !!val ) { this.personal = val }
      });

    });


  }

  // Save button event Starts
  save(form: any) {
      if (!form.valid) {
          return;
      }

      this.formDataService.setPersonal(this.personal);

      const docRef = this.colRef.doc(this.afAuth.auth.currentUser.uid);
      docRef.set({
        firstName: this.personal.firstName,
        lastName: this.personal.lastName,
        genre: this.personal.genre,
        birthdate: this.personal.birthdate,
      }).then( () => {
        console.log('Valor guardado');
      })
      .catch(e => {
        console.log(e.message);
      });

      const firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
      if (firstState.length > 0) {
      };
      this.router.navigateByUrl('/register-wizard/address', { relativeTo: this.route.parent, skipLocationChange: true });
  }
  // Save button event Ends
}
