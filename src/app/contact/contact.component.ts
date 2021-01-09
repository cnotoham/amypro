import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  save(): void {
    console.log(this.contactUsForm.get('name').value);
    console.log(this.contactUsForm.get('phone').value);
    console.log(this.contactUsForm.get('email').value);
    console.log(this.contactUsForm.get('subject').value);
    console.log(this.contactUsForm.get('message').value);

    // TODO: call azure function to send email
    this.contactUsForm.reset();
  }
}
