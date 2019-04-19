export interface CityGroupWeather {
    cnt: number,
    list: CityWeather[],
}

export interface CityForecast {
    city: CityInfo,
    cnt: number,
    cod: number,
    list: CityWeather[],
}

export interface CityWeather {
    clouds: Clouds,
    coord?: Coords,
    id?: number,
    name?: string,
    dt: number,
    dt_txt?: string,
    main: Main,
    sys: Sys,
    visibility?: number;
    weather: WeatherDescrition[],
    wind?: {
        speed: number,
        deg: number,
    },
    rain?: {
        ['3h']: number,
    },
    cod?: number,
}

export interface CityInfo {
    name: string,
    country: string,
    lat?: number,
    lon?: number,
    iso2?: string,
    population?: number,
    type?: string,
    geoname_id?: number,
}

export interface WeatherDescrition {
    id: number,
    main: string,
    description: string,
    icon: string,
}

export interface Sys {
    type?: number,
    id?: number,
    message?: number,
    country?: string,
    sunrise?: number,
    sunset?: number,
    pod?: string
}

export interface Main {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
    grnd_level?: number,
    sea_level?: number,
    temp_kf?: number,
}

export interface Clouds {
    all: number,
}

export interface Coords {
    lon: number,
    lat: number,
}