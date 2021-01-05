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
