import { Action } from '@ngrx/store';

export const WEATHER_TYPE: string = '[WEATHER] Weather';
export const FORECAST_TYPE: string = '[WEATHER] Forecast';

export class WeatherAction implements Action {
    readonly type = WEATHER_TYPE
}

export class ForecastAction implements Action {
    readonly type = FORECAST_TYPE
}

export type actions = WeatherAction | ForecastAction;