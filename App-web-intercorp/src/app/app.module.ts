import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule} from '@angular/forms';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryFormComponent } from './registry-form/registry-form.component';
import { ExitFormComponent } from './exit-form/exit-form.component';
import { ListCustomerDataComponent } from './list-customer-data/list-customer-data.component';

import { FirestoreService } from './firestore.service';
import { LocalService } from './local.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistryFormComponent,
    ExitFormComponent,
    ListCustomerDataComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    FirestoreService,
    LocalService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
