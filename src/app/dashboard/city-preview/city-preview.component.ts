import { Component, OnInit, Input } from '@angular/core';
import * as fromFontAwesome from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../core/weather.service';
import * as fromWeatherInterface from '../../shared/weather.interface';
import { City } from '../../shared/city.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as fromUnitsAction from '../../core/units.actions';
import { UnitsTransformService } from '../../core/units-transform.service';

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
  _main: fromWeatherInterface.Main;
  _windSpeed: number;
  _unitsSystem;

  constructor(  private _weatherService: WeatherService, 
                private _store: Store<AppState>,
                private _unitsTranform: UnitsTransformService ) {
    _store.select('unitsSystem').subscribe( units => {
      this.changeUnits( units );
    });
  }

  changeUnits( units: string ) {
    if ( units === fromUnitsAction.METRIC ) {
      this._unitsSystem = fromUnitsAction.units.METRIC;
    }
    if ( units === fromUnitsAction.IMPERIAL ) {
      this._unitsSystem = fromUnitsAction.units.IMPERIAL;
    }
    if (this._main ) {
      this._main.temp = this._unitsTranform.toggleTemp(this._main.temp, units );
      this._windSpeed = this._unitsTranform.toggleSpeed(this._windSpeed, units );
    }
  }

  ngOnInit() {
    this._weather = this.info.weather.weather[0];
    this._main = this.info.weather.main;
    this._windSpeed = this.info.weather.wind.speed;
    this._backgroundImageVector += this.info.name.toLowerCase() + '.jpg';
    this._backgroundImage += this.info.name.toLowerCase() + '.jpg';
  }

}
