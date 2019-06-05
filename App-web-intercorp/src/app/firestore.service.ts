import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor( public firestore: AngularFirestore) { 
    
  }

  sendDataClient(objt: any) {
    return this.firestore.collection('register-customer').add(objt);
  }

  getDataClient() {
    return this.firestore.collection('register-customer').valueChanges();
  }
}
