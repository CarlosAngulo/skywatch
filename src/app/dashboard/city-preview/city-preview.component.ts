import { Component, OnInit, Input } from '@angular/core';
import * as fromFontAwesome from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../core/weather.service';
import * as fromWeatherInterface from '../../shared/weather.interface';
import { City } from 'src/app/shared/city.interface';

@Component({
  selector: 'app-city-preview',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent implements OnInit {

  @Input() info: City;
  _fontAwesome = fromFontAwesome;
  _backgroundImageVector = 'assets/img/cities/';
  _backgroundImage = 'assets/img/cities/';
  _weather: fromWeatherInterface.WeatherDescrition;

  constructor( private _weatherService: WeatherService ) { }

  ngOnInit() {
    console.log(this.info);
    this._weather = this.info.weather.weather[0];
    this._backgroundImageVector += this.info.name.toLowerCase() + '.jpg';
    this._backgroundImage += this.info.name.toLowerCase() + '-big.jpg';
  }

}
