import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-exit-form',
  templateUrl: './exit-form.component.html',
  styleUrls: ['./exit-form.component.css']
})

export class ExitFormComponent implements OnInit {

  public dataObjectCustomer: any = [];
  public averageAge: number;
  public standartDevTotal: number;
  public agesClients: [];
  public averageSquareDiff: any;
  public arrayTotalAge: any;
  public quantityClients: any;

  constructor( public firestoreService: FirestoreService,
    public localService: LocalService) { 
      this.getTotal();
    }

  ngOnInit() {

    this.dataCustomer();

    }

  dataCustomer() {
    this.firestoreService.getDataClient().subscribe((obj: object) => {
        this.dataObjectCustomer=obj;

        this.sendDataToService(this.dataObjectCustomer);
        this.standartDeviation(this.dataObjectCustomer);
    })
  }

  sendDataToService(dataClient) {
    const data = [
      ...dataClient
      ];
    this.localService.averageAgeOfClient(data);
  };

  getTotal() {
    this.localService.currentAverageAgeTotal.subscribe((total) => {
      this.averageAge = total;
      });
  };

  standartDeviation(data) {
     this.quantityClients = data.length;
        const meanAge = data.reduce((acum, obj) => {
          return acum + obj.age
        },0);
        
        const squareDiffs = meanAge/this.quantityClients;
        const stdDev = Math.sqrt(data.map(x => Math.pow(x.age-squareDiffs,2)).reduce((acum, objt) => acum + objt)/this.quantityClients)
        
        return this.standartDevTotal = stdDev;
  };

};
