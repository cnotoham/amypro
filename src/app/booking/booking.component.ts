import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  showPrompt = false;
  showError = false;
  isLoading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      suburb: ['', Validators.required],
      state: ['', Validators.required],
      postcode: [''],
      country: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      refName: ['', Validators.required],
      refAddress: ['', Validators.required],
      refSuburb: ['', Validators.required],
      refState: ['', Validators.required],
      refPostcode: [''],
      refCountry: ['', Validators.required],
      refPhone: [''],
      refEmail: ['', [Validators.required, Validators.email]],
      comment: ['']
    });
  }

  async onSubmit(): Promise<void> {
    this.isLoading = true;
    const url = `${ environment.azFuncBaseUri }api/SendMail`;

    const reqBody = {
      type: 'booking',
      data: this.bookingForm.value
    };

    // send email
    const resp = await fetch(url, {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(reqBody)
                                  });

    if (resp.status === 200) {
      this.showPrompt = true;
    } else {
      this.showError = true;
    }

    this.bookingForm.reset();
    this.isLoading = false;
  }
}
