import { NgModule } from '@angular/core';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BookingComponent],
  imports: [
    SharedModule,
    BookingRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class BookingModule { }
