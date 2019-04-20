import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CityDetailComponent } from './city-detail.component';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../core/weather.service';
import { CitiesService } from '../core/cities.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

class FakeRouter {
  navigate ( params ) { }
}

class FakeActivatedRoute {
  private subject = new Subject();
  
  get params() {
    return this.subject.asObservable();
  }

  push ( val ) {
    this.subject.next( val );
  }
}

class FakeWeatherSerivice {

  private subject = new Subject();
  
  getGroupWeather(){
    return this.subject.asObservable();
  }

  getCityForecast() {
    return this.subject.asObservable();
  }

}

class FakeStore {

  private subject = new Subject();

  dispatch(){}

  select( val: string ) {
    return this.subject.asObservable();
  }

}


describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let fixture: ComponentFixture<CityDetailComponent>;
  
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ CityDetailComponent ],
      providers: [ 
        CitiesService,
        { provide: Store, useClass: FakeStore },
        { provide: WeatherService, useClass: FakeWeatherSerivice },
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
      imports: [ ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    
    fixture = TestBed.createComponent(CityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the City Detail Component', () => {
    fixture.whenStable().then(()=> {
      expect(component).toBeTruthy();
    });
  });

  it('Should add the City Id', () => {

    const citiesService = TestBed.get(CitiesService);
    const cityList = citiesService.getCities();
    const someCity = cityList[ Math.round( Math.random() * cityList.length )];
    const activatedRoute: FakeActivatedRoute = TestBed.get( ActivatedRoute );

    activatedRoute.push( { id: someCity.id });    
    expect( component._city.name === someCity.name ).toBeTruthy;
    
  })

});
