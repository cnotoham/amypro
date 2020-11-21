import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccommodationDetailComponent } from './accommodation-detail/accommodation-detail.component';
import { KeyFeatureComponent } from './share/key-feature/key-feature.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';


@NgModule({
  declarations: [
    AccommodationComponent,
    AccommodationDetailComponent,
    KeyFeatureComponent,
    AccommodationListComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    FontAwesomeModule,
    MatCarouselModule.forRoot()
  ]
})
export class AccommodationModule { }
