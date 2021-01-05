import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../accommodation.service';
import { Slide } from '../slide';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.scss']
})
export class AccommodationListComponent implements OnInit {

  constructor(private accommodationService: AccommodationService) { }

  dandenongSlides: Slide[];
  blackBurnSlides: Slide[];
  dandenong: string;
  blackburn: string;

  ngOnInit(): void {
    this.accommodationService.getAccommodations()
        .subscribe(resp => {
          this.dandenongSlides = resp[0].slides;
          this.dandenong = resp[0].name;
          this.blackBurnSlides = resp[1].slides;
          this.blackburn = resp[1].name;
        });
  }

}
