import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';
import { WeatherService } from '../core/weather.service';
import { CitiesService } from '../core/cities.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';

class FakeRouter {
  navigate ( ) { }
}

class FakeWeatherSerivice {

  private subject = new Subject();
  
  getGroupWeather(){
    return this.subject.asObservable();
  }

}

class FakeStore {
  dispatch(){}
}


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        CitiesService,
        { provide: Router, useClass: FakeRouter },
        { provide: WeatherService, useClass: FakeWeatherSerivice },
        { provide: Store, useClass: FakeStore },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create Dashboard Component', () => {
    expect(component).toBeTruthy();
  });

  it ('Should redirect to city detail component on click', () => {

    const router = TestBed.get( Router );
    const spy = spyOn( router, 'navigate');
    const citiesService = TestBed.get(CitiesService);

    component.gotoCityDetail( citiesService.getCities()[0] );

    expect( spy ).toHaveBeenCalledWith( ['/city', citiesService.getCities()[0].id] );
    
  });

});
