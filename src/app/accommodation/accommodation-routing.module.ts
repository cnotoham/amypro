import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';
import { AccommodationComponent } from './accommodation.component';

const routes: Routes = [
  { path: '', component: AccommodationComponent },
  { path: ':id', component: AccommodationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccommodationRoutingModule { }
