import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputFieldComponent } from './form-input-field/form-input-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormInputFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInputFieldComponent,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
