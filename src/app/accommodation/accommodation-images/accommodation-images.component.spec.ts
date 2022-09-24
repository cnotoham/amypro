import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationImagesComponent } from './accommodation-images.component';

describe('AccommodationImagesComponent', () => {
  let component: AccommodationImagesComponent;
  let fixture: ComponentFixture<AccommodationImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AccommodationImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
