import * as fromWeather from './weather.actions';

export function weatherReducer( state: string = fromWeather.FORECAST_TYPE, action: fromWeather.actions ) {
    switch ( action.type ) {

        case fromWeather.WEATHER_TYPE:
            return fromWeather.WEATHER_TYPE;

        case fromWeather.FORECAST_TYPE:
            return fromWeather.FORECAST_TYPE;

        default:
            return state;
    }
} 