import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as fromWeatherInterface from '../shared/weather.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromWeatherActions from './weather.actions';
import { CitiesService } from './cities.service';
import { City } from '../shared/city.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  _groupWeather: fromWeatherInterface.CityGroupWeather;
  _currentCity: City;
  _allocatedCities: number[];
  _weatherDataType: string;
  _faIcons = {
    ['01d']: 'faSun',
    ['01n']: 'faMoon',
    ['02d']: 'faCloudSun',
    ['02n']: 'faCloudMoon',
    ['03d']: 'faCloud',
    ['03n']: 'faCloud',
    ['04d']: 'faCloud',
    ['04n']: 'faCloud',
    ['09d']: 'faCloudShowersHeavy',
    ['09n']: 'faCloudShowersHeavy',
    ['10d']: 'faCloudSunRain',
    ['10n']: 'faCloudMoonRain',
    ['11d']: 'faBolt',
    ['11n']: 'faBolt',
    ['13d']: 'facloudMeatball',
    ['13n']: 'facloudMeatball',
    ['50d']: 'faSmog',
    ['50n']: 'faSmog'
  }

  constructor( private _http: HttpClient, private _store: Store<AppState>, private _citiesService: CitiesService ) {
    this._store.select('weatherDataType').subscribe( weatherDataType => this._weatherDataType = weatherDataType );
  }
  
  getGroupWeather( group: number[] ): Observable<fromWeatherInterface.CityGroupWeather> {
    this._allocatedCities = group;
    const groupWeatherUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.group}?id=${group}&APPID=${environment.openWatherMapApi.key}&units=metric`;
    return this._http.get<fromWeatherInterface.CityGroupWeather>( groupWeatherUrl );
  }

  getCityWeather( id: number ): Observable<fromWeatherInterface.CityWeather> {
    const cityWeatherUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.weather}?id=${id}&APPID=${environment.openWatherMapApi.key}&units=metric`;
    return this._http.get<fromWeatherInterface.CityWeather>( cityWeatherUrl );
  }

  getCityForecast( id: number ): Observable<fromWeatherInterface.CityForecast> {
    const cityForecastUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.forecast}?id=${id}&APPID=${environment.openWatherMapApi.key}&units=metric`;
    return this._http.get<fromWeatherInterface.CityForecast>( cityForecastUrl );
  }
  
  set currentCity ( city: City ) {
    this._currentCity = city;
  }

  set groupWeather ( group: fromWeatherInterface.CityGroupWeather ) {
    this._groupWeather = group;
  }
  
  get icons() {
    return this._faIcons;
  }

}
