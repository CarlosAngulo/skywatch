export interface cityGroupWeather {
    cnt: number,
    list: CityWeather[];
}

export interface CityWeather {
    clouds: {
        all: number,
    },
    coord: {
        lon: number,
        lat: number,
    },
    dt: number,
    id: number,
    main: Main,
    name: string,
    sys: Sys,
    visibility: number;
    weather: WeatherDescrition[],
    wind: {
        speed: number,
        deg: number,
    },
    rain?: {
        ['3h']: number
    },
    cod?: number
}

export interface WeatherDescrition {
    id: number,
    main: string,
    description: string,
    icon: string,
}

export interface Sys {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number,
}

export interface Main {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
}