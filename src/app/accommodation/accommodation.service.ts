import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Accommodation } from './accommodation';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  accommodation: Accommodation[];

  constructor() {
    this.accommodation =
    [
      {
        id: 1,
        name: 'Dandenong',
        slides: [
          { imageUrl: 'Dandy House 720 1.jpg' },
          { imageUrl: 'Dandy House 720 2.jpg' },
          { imageUrl: 'Dandy House 720 3.jpg' },
          { imageUrl: 'Dandy House 720 4.jpg' },
          { imageUrl: 'Dandy House 720 5.jpg' },
          { imageUrl: 'Dandy House 720 6.jpg' },
          { imageUrl: 'Dandy House 720 7.jpg' },
          { imageUrl: 'Dandy House 720 8.jpg' },
          { imageUrl: 'Dandy House 720 9.jpg' },
          { imageUrl: 'Dandy House 720 10.jpg' },
          { imageUrl: 'Dandy House 720 11.jpg' },
          { imageUrl: 'Dandy House 720 12.jpg' },
          { imageUrl: 'Dandy House 720 13.jpg' },
          { imageUrl: 'Dandy House 720 14.jpg' },
          { imageUrl: 'Dandy House 720 15.jpg' },
          { imageUrl: 'Dandy House 720 16.jpg' },
          { imageUrl: 'Dandy House 720 17.jpg' },
          { imageUrl: 'Dandy House 720 18.jpg' },
          { imageUrl: 'Dandy House 720 19.jpg' },
          { imageUrl: 'Dandy House 720 20.jpg' },
          { imageUrl: 'Dandy House 720 21.jpg' },
          { imageUrl: 'Dandy House 720 22.jpg' },
          { imageUrl: 'Dandy House 720 23.jpg' },
          { imageUrl: 'Dandy House 720 24.jpg' },
          { imageUrl: 'Dandy House 720 25.jpg' },
          { imageUrl: 'Dandy House 720 26.jpg' },
          { imageUrl: 'Dandy House 720 27.jpg' },
          { imageUrl: 'Dandy House 720 28.jpg' },
          { imageUrl: 'Dandy House 720 29.jpg' },
          { imageUrl: 'Dandy House 720 30.jpg' },
          { imageUrl: 'Dandy House 720 31.jpg' }
        ]
      },
      {
        id: 2,
        name: 'Blackburn',
        slides: [
          { imageUrl: 'IMG_0025.JPG' },
          { imageUrl: 'IMG_0024.JPG' },
          { imageUrl: 'IMG_0023.JPG' },
          { imageUrl: 'IMG_0022.JPG' },
          { imageUrl: 'IMG_0021.JPG' },
          { imageUrl: 'IMG_0020.JPG' },
          { imageUrl: 'IMG_0019.JPG' },
          { imageUrl: 'IMG_0018.JPG' },
          { imageUrl: 'IMG_0017.JPG' },
          { imageUrl: 'IMG_0016.JPG' },
          { imageUrl: 'IMG_0015.JPG' },
          { imageUrl: 'IMG_0014.JPG' },
          { imageUrl: 'IMG_0013.JPG' },
          { imageUrl: 'IMG_0012.JPG' },
          { imageUrl: 'IMG_0011.JPG' },
          { imageUrl: 'IMG_0010.JPG' },
          { imageUrl: 'IMG_0009.JPG' },
          { imageUrl: 'IMG_0008.JPG' },
          { imageUrl: 'IMG_0007.JPG' },
          { imageUrl: 'IMG_0006.JPG' },
          { imageUrl: 'IMG_0005.JPG' },
          { imageUrl: 'IMG_0004.JPG' },
          { imageUrl: 'IMG_0003.JPG' },
          { imageUrl: 'IMG_0002.JPG' },
          { imageUrl: 'IMG_0001.JPG' }
        ]
      }
    ];
  }

  public getAccommodations(): Observable<Accommodation[]> {
    return of(this.accommodation.slice());
  }

  public getAccommodation(id: number): Observable<Accommodation> {
    const accommodation = this.accommodation.slice(id - 1);
    return of(accommodation[0]);
  }
}
