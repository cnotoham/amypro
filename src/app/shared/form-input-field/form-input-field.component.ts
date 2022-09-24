import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss']
})
export class FormInputFieldComponent implements OnInit {
  @Input() id: string;
  @Input() type: string;
  @Input() label: string;
  @Input() group: UntypedFormGroup;
  @Input() required = false;
  @Input() placeholder: string;
  @Input() maxlength: number;

  constructor() { }

  get getId(): string {
    return this.id + 'Id';
  }

  get getType(): string {
    return this.type ? this.type : 'text';
  }

  get getFormControlName(): string {
    return this.id;
  }

  get getPlaceholder(): string {
    if (this.required) {
      return this.placeholder + ' (required)';
    }

    return this.placeholder;
  }

  get getMaxlength(): number {
    return this.maxlength ? this.maxlength : null;
  }

  isTypeEmail(): boolean {
    return this.type === 'email';
  }

  ngOnInit(): void {
  }

}
