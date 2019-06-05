import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class LocalService {

  public totalAge: number;
  public averageAgeClient: number;
  public squareDiffs: any;
  public averageTotal: any;
  public averageSquareDiff: any;
  public arrayTotalAge: any;

  public dataClient = new BehaviorSubject(0);
  currentAverageAgeTotal = this.dataClient.asObservable()

  constructor() { }

  averageAgeOfClient(data) {
    this.totalAge = data.reduce((acum,obj) => {
      return acum + obj.age;
    }, 0)

    this.averageAgeClient = this.totalAge/data.length;
    
    this.dataClient.next(this.averageAgeClient);
      return this.averageAgeClient;
  }

}
