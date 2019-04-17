import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) { }

  get groupWeather(): Observable<any> {
    const groupWeatherUrl = environment.openWatherMapApi.baseUrl + environment.openWatherMapApi.weather +'?q=Berlin,de&APPID='+ environment.openWatherMapApi.key;
    return this.http.get(groupWeatherUrl);
  } 
  
  public get api() :string {
    return environment.openWatherMapApi.baseUrl + environment.openWatherMapApi.weather +'?q=Berlin,de&APPID='+environment.openWatherMapApi.key;
  } 
}
