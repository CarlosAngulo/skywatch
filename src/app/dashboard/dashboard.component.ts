import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../core/weather.service';
import { Observable } from 'rxjs';
import * as fromWeather from '../shared/weather.interface';
import { Router } from '@angular/router';
import { CitiesService } from '../core/cities.service';
import { City } from '../shared/city.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _cities: City[];
  _allocatedCities: number[];

  constructor(  private _wheatherService: WeatherService, 
                private _router: Router, 
                private _citiesService: CitiesService ) { }

  ngOnInit() {
    this._allocatedCities = this._citiesService.getCities().map( city => city.id )
    const weather: Observable<fromWeather.CityGroupWeather> = this._wheatherService.getGroupWeather( this._allocatedCities );
    weather.subscribe( results => {
      this._cities = this._citiesService.addGroupWeather( this._citiesService.getCities(), results );
      this._wheatherService.groupWeather = results;
    });
  }

  gotoCityDetail( city: City ) {
    this._wheatherService.currentCity = city;
    this._router.navigate(['/city', city.id]);
  }

}
