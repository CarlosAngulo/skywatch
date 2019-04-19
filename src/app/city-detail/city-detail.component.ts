import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../core/weather.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { City } from '../shared/city.interface';
import { CitiesService } from '../core/cities.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  _city: City;
  _weatherDataType: string;
  _backgroundImage = 'assets/img/cities/';

  constructor(  private _activatedRoute: ActivatedRoute, 
                private _weatherService: WeatherService,
                private _citiesService: CitiesService,
                private _store: Store<AppState> ) {}

  ngOnInit() {
    
    
    this._store.select('weatherDataType').subscribe( weatherDataType => {
      this._weatherDataType = weatherDataType;
    });
    
    this._activatedRoute.params.subscribe( params => {
      this.getForecast( params['id'] )
    });
    
  }
  
  getForecast( id: number ) {
    this._city = this._citiesService.getCurrentCity( id );
    this._backgroundImage += this._city.name.toLowerCase() + '-big.jpg';
    this._weatherService.getCityForecast( id ).subscribe( forecast => {
      this._citiesService.addForecast( this._city, forecast );
      console.log(this._city);
    });
  }

}
