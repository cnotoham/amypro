import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AccommodationComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    FontAwesomeModule
  ]
})
export class AccommodationModule { }
