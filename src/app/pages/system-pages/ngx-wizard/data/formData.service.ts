import { Injectable } from '@angular/core';

import { FormData, Personal, Address } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

import { Observable } from 'rxjs/Observable';

// Auth Service
import { AuthService } from '../../../../core/auth.service';

// data base Service
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid = false;
    private isWorkFormValid = false;
    private isAddressFormValid = false;

    private personal: Personal = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      genre: this.formData.genre,
      birthdate: this.formData.birthdate
    };

    // public personal: Observable<Personal>;

    private itemDoc: AngularFirestoreDocument<Personal>;
    private crewnie: Observable<Personal>;

    constructor(
      private workflowService: WorkflowService,
      private acAuth: AuthService,  // Angular Crewnie Authentication
      private afs: AngularFirestore,
    ) {}

    // Get Personal Tab Data
    getPersonal(): any {
      return this.personal;
    }

    // Set Personal Tab Data
    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.genre = data.genre;
        this.formData.birthdate = data.birthdate;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    // Get Work Tab Data
    getWork(): string {
        // Return the work type
        return this.formData.work;
    }

    // Set Work Tab Data
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    // Get Address Tab Data
    getAddress(): Address {
        // Return the Address data
        const address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    // Set Address Tab Data
    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }
}
