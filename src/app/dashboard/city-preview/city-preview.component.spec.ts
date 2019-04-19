import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPreviewComponent } from './city-preview.component';

describe('CityPreviewComponent', () => {
  let component: CityPreviewComponent;
  let fixture: ComponentFixture<CityPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
