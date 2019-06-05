import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';


@Component({
  selector: 'app-list-customer-data',
  templateUrl: './list-customer-data.component.html',
  styleUrls: ['./list-customer-data.component.css']
})
export class ListCustomerDataComponent implements OnInit {

  public dataCustomer: any;

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getDataClient();
  }

  getDataClient() {
    this.firestoreService.getDataClient().subscribe((obj: object) => {
      this.dataCustomer=obj;
    })
  }
}
