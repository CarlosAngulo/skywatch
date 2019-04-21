import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common'
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CityForecast, CityWeather } from '../shared/weather.interface';
import { UnitsTransformService } from '../core/units-transform.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromUnitsActions from '../core/units.actions';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Inject(LOCALE_ID) locale: string;

  _forecast: CityForecast;
  _forecastList: CityWeather[];
  _temperatureUnits: string;

  public _temperature: ChartDataSets[] = [];
  public _lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [
        {
          id: 'x-axis-1',
          position: 'bottom',
          gridLines: {  color: 'rgba(255,255,255,0.1)' },
          ticks: {
            fontColor: 'white',
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: { color: 'rgba(255,255,255,0.2)', borderDash: [4,2] },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'yellow',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(31, 200, 255, 0.3)',
      borderColor: '#0ea2d2',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#aa89ca',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  constructor( private _store: Store<AppState>, private _unitsTranform: UnitsTransformService ) {
    _store.select('unitsSystem').subscribe( units => {
      
      if ( units == fromUnitsActions.METRIC ) {
        this._temperatureUnits = fromUnitsActions.units['METRIC'].temperatureUnits
      } else {
        this._temperatureUnits = fromUnitsActions.units['IMPERIAL'].temperatureUnits
      }
       
      this.changeUnits( units );
      
    });
  }

  ngOnInit() { }

  changeUnits( units: string ) {
    // Transform the _temperature data through this._unitsTranform.toggleTemp()
  }

  public addForecast( forecast:CityForecast ) {    
    this._forecast = forecast;
    this._forecastList = forecast.list.slice(0,12);
    this._temperature = [];
    this._temperature.push({data: this._forecastList.map( temp => temp.main.temp ), label: 'Temperature'});
    this._lineChartLabels = this._forecastList.map( temp => formatDate(temp.dt_txt, 'h a', 'en-US') );
  }

}
