import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapComponent } from './map/map.component';
import { KeyFeatureComponent } from './share/key-feature/key-feature.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AccommodationComponent,
    MapComponent,
    KeyFeatureComponent,
    AccommodationListComponent
  ],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatDialogModule,
    MatCarouselModule.forRoot()
  ],
  entryComponents: [
    MapComponent
  ]
})
export class AccommodationModule { }
