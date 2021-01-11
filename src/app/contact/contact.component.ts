import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment'
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

  async onSubmit(): Promise<void> {
    const url = `${ environment.azFuncBaseUri }api/SendMail`;

    console.log('url: ' + url);
    const resp = await fetch(url, {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(this.contactUsForm.value)
                                  });

    console.log(await resp.json());

    // TODO: call azure function to send email
    this.contactUsForm.reset();
  }
}
