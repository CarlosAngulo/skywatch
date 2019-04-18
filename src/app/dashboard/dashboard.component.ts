import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../core/weather.service';
import { Observable } from 'rxjs';
import * as fromWeather from '../shared/weather.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cities: fromWeather.CityWeather [];

  constructor( private _wheatherService: WeatherService ) { }

  ngOnInit() {
    let weather: Observable<fromWeather.cityGroupWeather> = this._wheatherService.groupWeather;
    weather.subscribe( results => {
      console.log(results);
      this.cities = results.list;
    });
  }

}
