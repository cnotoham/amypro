import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { AccommodationListComponent } from './accommodation-list.component';

describe('AccommodationListComponent', () => {
  let component: AccommodationListComponent;
  let fixture: ComponentFixture<AccommodationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccommodationListComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
