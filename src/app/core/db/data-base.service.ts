import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataBaseService {

  constructor(
    private afs: AngularFirestore
  ) { }
  getCollection( colectionName: string ) {
    return this.afs.collection(colectionName);
  }
}
