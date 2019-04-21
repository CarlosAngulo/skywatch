import { TestBed, getTestBed, async, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';

class FakeStore {

  private subject = new Subject();

  dispatch(){}

  select( val: string ) {
    return this.subject.asObservable();
  }

}

describe('WeatherService', () => {
  
  let injector: TestBed;
  let service: WeatherService;
  let httpMock: HttpTestingController;
  const mockGroup = [2267057, 2657896];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: Store, useClass: FakeStore },
      ]
    });
    injector = getTestBed();
    service = injector.get(WeatherService);
    httpMock = injector.get(HttpTestingController);
    service._unitsSystem = "metric";
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should issue a request`, async(
    inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
      
      const groupWeatherUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.group}?id=${mockGroup}&APPID=${environment.openWatherMapApi.key}&units=${service._unitsSystem}`;
      
      service.getGroupWeather(mockGroup).subscribe();
      
      backend.expectOne({
        url: groupWeatherUrl,
        method: 'GET'
      });
      
    }))
  );

  it('returned Observable should match the right data', inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {

    const mockCitiesResult = {"cnt":2,"list":[{"coord":{"lon":-9.13,"lat":38.72},"sys":{"type":1,"id":6901,"message":0.0051,"country":"PT","sunrise":1555739614,"sunset":1555787821},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"main":{"temp":18.92,"pressure":1013,"humidity":56,"temp_min":15,"temp_max":22},"visibility":10000,"wind":{"speed":4.6,"deg":330},"clouds":{"all":0},"dt":1555791195,"id":2267057,"name":"Lisbon"},{"coord":{"lon":8.55,"lat":47.37},"sys":{"type":1,"id":6941,"message":0.0065,"country":"CH","sunrise":1555734526,"sunset":1555784424},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"main":{"temp":13.95,"pressure":1022,"humidity":34,"temp_min":8.89,"temp_max":19},"visibility":10000,"wind":{"speed":4.6,"deg":50},"clouds":{"all":0},"dt":1555791195,"id":2657896,"name":"Zurich"}]};

    service.getGroupWeather(mockGroup)
      .subscribe(cities => {
        expect(cities.list[0].name).toEqual('Lisbon');
        expect(cities.list[0].weather[0].description).toEqual('clear sky');
        
        expect(cities.list[1].name).toEqual('Zurich');
        expect(cities.list[1].weather[0].description).toEqual('clear sky');
      });

    const groupWeatherUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.group}?id=${mockGroup}&APPID=${environment.openWatherMapApi.key}&units=metric`;

    const req = backend.expectOne(
      groupWeatherUrl
    );

    req.flush(mockCitiesResult);

  }));

});