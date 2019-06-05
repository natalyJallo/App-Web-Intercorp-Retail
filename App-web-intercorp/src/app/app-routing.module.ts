import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitFormComponent } from './exit-form/exit-form.component';
import { ListCustomerDataComponent } from './list-customer-data/list-customer-data.component';
import { RegistryFormComponent } from './registry-form/registry-form.component';

const routes: Routes = [
  { path: '', component: RegistryFormComponent },
  { path: 'exitForm', component: ExitFormComponent },
  { path: 'listClient', component: ListCustomerDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
