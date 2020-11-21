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
          { imageUrl: '../../assets/images/Dandy House 1024 1.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 2.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 3.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 4.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 5.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 6.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 7.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 8.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 9.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 10.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 11.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 12.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 13.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 14.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 15.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 16.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 17.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 18.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 19.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 20.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 21.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 22.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 23.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 24.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 25.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 26.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 27.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 28.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 29.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 30.jpg' },
          { imageUrl: '../../assets/images/Dandy House 1024 31.jpg' }
        ]
      },
      {
        id: 2,
        name: 'Blackburn',
        slides: [
          { imageUrl: '../../assets/images/IMG_0001.JPG' },
          { imageUrl: '../../assets/images/IMG_0002.JPG' },
          { imageUrl: '../../assets/images/IMG_0003.JPG' },
          { imageUrl: '../../assets/images/IMG_0004.JPG' },
          { imageUrl: '../../assets/images/IMG_0005.JPG' },
          { imageUrl: '../../assets/images/IMG_0006.JPG' },
          { imageUrl: '../../assets/images/IMG_0007.JPG' },
          { imageUrl: '../../assets/images/IMG_0008.JPG' },
          { imageUrl: '../../assets/images/IMG_0009.JPG' },
          { imageUrl: '../../assets/images/IMG_0010.JPG' },
          { imageUrl: '../../assets/images/IMG_0011.JPG' },
          { imageUrl: '../../assets/images/IMG_0012.JPG' },
          { imageUrl: '../../assets/images/IMG_0013.JPG' },
          { imageUrl: '../../assets/images/IMG_0014.JPG' },
          { imageUrl: '../../assets/images/IMG_0015.JPG' },
          { imageUrl: '../../assets/images/IMG_0016.JPG' },
          { imageUrl: '../../assets/images/IMG_0017.JPG' },
          { imageUrl: '../../assets/images/IMG_0018.JPG' },
          { imageUrl: '../../assets/images/IMG_0019.JPG' },
          { imageUrl: '../../assets/images/IMG_0020.JPG' },
          { imageUrl: '../../assets/images/IMG_0021.JPG' },
          { imageUrl: '../../assets/images/IMG_0022.JPG' },
          { imageUrl: '../../assets/images/IMG_0023.JPG' },
          { imageUrl: '../../assets/images/IMG_0024.JPG' },
          { imageUrl: '../../assets/images/IMG_0025.JPG' }
        ]
      }
    ];

    console.log(this.accommodation);
  }

  public getAccommodations(): Observable<Accommodation[]> {
    return of(this.accommodation.slice());
  }

  public getAccommodation(id: number): Observable<Accommodation> {
    const accommodation = this.accommodation.slice(id-1);
    console.log('AccommodationService::getAccommodation');
    console.log(accommodation);
    return of(accommodation[0]);
  }
}
