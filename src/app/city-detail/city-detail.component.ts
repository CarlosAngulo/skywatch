import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../core/weather.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { City } from '../shared/city.interface';
import { CitiesService } from '../core/cities.service';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  @ViewChild('forecastComponent') forecast: ForecastComponent;

  _city: City;
  _weatherDataType: string;
  _backgroundImage = 'assets/img/cities/';
  _backgroundImageVector = 'assets/img/cities/';

  constructor(  private _activatedRoute: ActivatedRoute, 
                private _weatherService: WeatherService,
                private _citiesService: CitiesService,
                private _store: Store<AppState> ) {}

  ngOnInit() {

    this._city = this._citiesService.getCurrentCity( 2267057 )
    
    this._store.select('weatherDataType').subscribe( weatherDataType => {
      this._weatherDataType = weatherDataType;
    });
    
    this._activatedRoute.params.subscribe( params => {
      this.implementForecast( params['id'] )
    });
    
  }
  
  implementForecast( id: number ) {
    this._city = this._citiesService.getCurrentCity( id );
    this._backgroundImage += this._city.name.toLowerCase() + '-big.jpg';
    this._backgroundImageVector += this._city.name.toLowerCase() + '.jpg';
    this._weatherService.getCityForecast( id ).subscribe( forecast => {
      this._citiesService.addForecast( this._city, forecast );
      this.forecast.addForecast(forecast);
    });
  }

}
