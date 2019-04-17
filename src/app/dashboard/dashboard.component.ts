import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../core/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor( private _wheatherService: WeatherService ) { }

  ngOnInit() {
    let weather: Observable<any> = this._wheatherService.groupWeather;
    weather.subscribe( o => {
      console.log(o);
    })
  }

}
