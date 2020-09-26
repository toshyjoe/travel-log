import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlaceComponent } from './detail-place.component';

describe('DetailPlaceComponent', () => {
  let component: DetailPlaceComponent;
  let fixture: ComponentFixture<DetailPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
