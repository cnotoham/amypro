import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    AccommodationComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    SharedModule
  ]
})
export class AccommodationModule { }
