import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccommodationRoutingModule } from './accommodation-routing.module';
import { AccommodationComponent } from './accommodation.component';

import { MapComponent } from './map/map.component';
import { KeyFeatureComponent } from './share/key-feature/key-feature.component';
import { AccommodationListComponent } from './accommodation-list/accommodation-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


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
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatListModule,
    MatIconModule,
  ],
  entryComponents: [
    MapComponent
  ]
})
export class AccommodationModule { }
