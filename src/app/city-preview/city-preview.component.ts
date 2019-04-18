import { Component, OnInit, Input } from '@angular/core';
import * as fromFontAwesome from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../core/weather.service';
import * as fromWeatherInterface from '../shared/weather.interface';

@Component({
  selector: 'app-city-preview',
  templateUrl: './city-preview.component.html',
  styleUrls: ['./city-preview.component.scss']
})
export class CityPreviewComponent implements OnInit {

  @Input() info;
  fontAwesome = fromFontAwesome;
  backgroundImageVector = 'assets/img/cities/';
  backgroundImagePicture = 'assets/img/cities/';
  backgroundColor: string;
  weather: fromWeatherInterface.WeatherDescrition;

  constructor( private weatherService: WeatherService ) { }

  ngOnInit() {
    this.weather = this.info.weather[0];
    this.backgroundImageVector += this.info.name.toLowerCase() + '.jpg';
    this.backgroundImagePicture += this.info.name.toLowerCase() + '-big.jpg';
    const o = Math.round, r = Math.random, s = 255;
    this.backgroundColor = 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.7 + ')';
  }

}
