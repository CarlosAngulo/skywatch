import * as fromWeather from './units.actions';

export function unitsSystemReducer( state: string = fromWeather.METRIC, action: fromWeather.actions ) {
    
    switch ( action.type ) {

        case fromWeather.METRIC:
            return fromWeather.METRIC;

        case fromWeather.IMPERIAL:
            return fromWeather.IMPERIAL;

        case fromWeather.TOGGLE:
            if (state === fromWeather.METRIC) {
                return fromWeather.IMPERIAL;
            } else {
                return fromWeather.METRIC;
            }

        default:
            return state;
    }
} 