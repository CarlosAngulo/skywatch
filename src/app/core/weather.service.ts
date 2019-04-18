import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) { }
  
  faIcons = {
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

  allocatedCities = [ 2267057, 2657896, 2650225, 2618425, 3067696, 498817, 491422, 2641673 ];
  
  get groupWeather(): Observable<any> {
    const groupWeatherUrl = `${environment.openWatherMapApi.baseUrl}${environment.openWatherMapApi.group}?id=${this.allocatedCities}&APPID=${environment.openWatherMapApi.key}&units=metric`;
    return this.http.get(groupWeatherUrl);
  } 
  
  get icons() {
    return this.faIcons;
  }
  
  

}
