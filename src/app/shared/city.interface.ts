import { CityForecast, CityWeather } from './weather.interface';

export interface City {
    id: number,
    name: string,
    description: string,
    excerpt: string,
    color: string,
    forecast?: CityForecast,
    weather?: CityWeather,
}