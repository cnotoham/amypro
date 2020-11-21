import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccommodationService } from '../accommodation.service';
import { Slide } from '../slide';

@Component({
  selector: 'app-accommodation-detail',
  templateUrl: './accommodation-detail.component.html',
  styleUrls: ['./accommodation-detail.component.scss']
})
export class AccommodationDetailComponent implements OnInit {

  accommodationId = 1;
  slides: Slide[];

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) { }

  ngOnInit(): void {
    this.accommodationId = +this.route.snapshot.paramMap.get('id');
    console.log(this.accommodationId);
    this.accommodationService
        .getAccommodation(this.accommodationId)
        .subscribe(p => {
          console.log(p);
          this.slides = p.slides;
        });
  }
}
