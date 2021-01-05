import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccommodationService } from '../accommodation.service';
import { MapComponent } from '../map/map.component';
import { Slide } from '../slide';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.scss']
})
export class AccommodationListComponent implements OnInit {

  dandenongSlides: Slide[];
  blackBurnSlides: Slide[];
  dandenong: string;
  blackburn: string;

  private placeIdMap = new Map();

  constructor(private accommodationService: AccommodationService, public dialog: MatDialog) {
    this.placeIdMap.set('dandenong', 'ChIJ4-THis9q1moRU3T6SjW7Q3g');
    this.placeIdMap.set('blackburn','ChIJvx4BnjIV1moRCi1eVGweHwU');
  }

  ngOnInit(): void {
    this.accommodationService.getAccommodations()
        .subscribe(resp => {
          this.dandenongSlides = resp[0].slides;
          this.dandenong = resp[0].name;
          this.blackBurnSlides = resp[1].slides;
          this.blackburn = resp[1].name;
        });
  }

  showMap(property: string) {
    const dialogRef = this.dialog.open(MapComponent, {
      data : {
        placeId: this.placeIdMap.get(property)
      }
    });
  }
}
