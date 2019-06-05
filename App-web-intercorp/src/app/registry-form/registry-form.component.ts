import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.css']
})
export class RegistryFormComponent implements OnInit {
  
  public nameClient: string;
  public lastName: string;
  public age: number;
  public birthdate: string;


  constructor( private serviceFirestore: FirestoreService, 
               private rutas: Router) { 

  }

  ngOnInit() {
  }
   
  sendRegisterClient() {
    const dataObjt = {
      name: this.nameClient,
      lastName: this.lastName,
      age: this.age,
      birthdate: this.birthdate,
    }
    console.log(dataObjt);
    if( dataObjt.name !== '' && dataObjt.lastName !== '') {
        this.serviceFirestore.sendDataClient(dataObjt);
        return this.rutas.navigateByUrl('/exitForm');
    } else {
        alert('ingrese los datos requeridos')
    }
  }

}
