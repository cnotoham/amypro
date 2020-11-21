import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeatureComponent } from './key-feature.component';

describe('KeyFeatureComponent', () => {
  let component: KeyFeatureComponent;
  let fixture: ComponentFixture<KeyFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
