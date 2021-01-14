import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class ContactModule { }
