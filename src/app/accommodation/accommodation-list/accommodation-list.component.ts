import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccommodationImagesComponent } from '../accommodation-images/accommodation-images.component';
import { AccommodationService } from '../accommodation.service';
import { MapComponent } from '../map/map.component';
import { Slide } from '../slide';

export interface AccommodationDialogData {
  property: string;
  slides: Slide[];
};

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
  isLoading = true;
  dandenongFirstImageUrl = '';
  blackBurnFirstImageUrl = '';
  // srcArray: Slide[];

  private placeIdMap = new Map();

  constructor(private accommodationService: AccommodationService, public dialog: MatDialog) {
    this.placeIdMap.set('dandenong', 'ChIJ4-THis9q1moRU3T6SjW7Q3g');
    this.placeIdMap.set('blackburn', 'ChIJvx4BnjIV1moRCi1eVGweHwU');
  }

  async ngOnInit(): Promise<void> {
    this.accommodationService.getAccommodations()
        .subscribe(resp => {
          this.dandenongSlides = resp[0].slides;
          this.dandenong = resp[0].name;
          this.dandenongFirstImageUrl = resp[0].slides[0].imageUrl;
          this.blackBurnSlides = resp[1].slides;
          this.blackburn = resp[1].name;
          this.blackBurnFirstImageUrl = resp[1].slides[1].imageUrl;
        });
  }

  showMap(property: string): void {
    const dialogRef = this.dialog.open(MapComponent, {
      data : {
        placeId: this.placeIdMap.get(property)
      }
    });
  }

  showImages = async (property: string) => {
    let accommodationSlides: Slide[];
    if (property === 'dandenong') {
      accommodationSlides = this.dandenongSlides;
    }

    if (property === 'blackburn') {
      accommodationSlides = this.blackBurnSlides;
    }

    const dialogRef = this.dialog.open(AccommodationImagesComponent, {
      data: {
        property,
        slides: accommodationSlides,
      }
    });
  };

  cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      }));

    await Promise.all(promises);
    this.isLoading = false;
  };
}
