import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUsForm: FormGroup;
  showPrompt = false;
  showError = false;
  isLoading = false;

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
    this.isLoading = true;
    this.showError = false;
    this.showPrompt = false;
    const url = `${ environment.azFuncBaseUri }api/SendMail`;
    const reqBody = {
      type: 'contact',
      data: this.contactUsForm.value
    };

    // send email
    const resp = await fetch(url, {
                                    method: 'POST',
                                    headers: {
                                      // eslint-disable-next-line @typescript-eslint/naming-convention
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(reqBody)
                                  });

    if (resp.status === 200) {
      this.showPrompt = true;
    } else {
      this.showError = true;
    }

    this.contactUsForm.reset();
    this.isLoading = false;
  }
}
