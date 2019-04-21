import { Injectable } from '@angular/core';
import { City } from '../shared/city.interface';
import * as fromWeather from '../shared/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  _cities: City[] = [
    {
      id: 2267057,
      name: 'Lisbon',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Lisbon is recognised as an alpha-level global city by the Globalization and World Cities (GaWC) Study Group',
      color: 'rgba(14, 162, 210, 0.7)',
    },
    {
      id: 2657896,
      name: 'Zurich',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Is the largest city in Switzerland and the capital of the canton of Zürich.',
      color: 'rgba(239, 112, 112, 0.8)',
    },
    {
      id: 2650225,
      name: 'Edinburgh',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Recognised as the capital of Scotland since at least the 15th century, Edinburgh is the seat of the Scottish Government, the Scottish Parliament and the supreme courts of Scotland.',
      color: 'rgba(196, 88, 208, 0.7)',
    },
    {
      id: 3067696,
      name: 'Prague',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Is the capital and largest city in the Czech Republic, the 14th largest city in the European Union and the historical capital of Bohemia. ',
      color: 'rgba(114, 177, 58, 0.7)',
    },
    {
      id: 498817,
      name: 'Saint Petersburg',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Is Russia\'s second-largest city after Moscow, part of the Saint Petersburg agglomeration with a population of 6.2 million. ',
      color: 'rgba(109, 7, 120, 0.7)',
    },
    {
      id: 491422,
      name: 'Sochi',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Is a city in Krasnodar Krai, Russia, located on the Black Sea coast near the border between Georgia/Abkhazia and Russia.',
      color: 'rgba(34, 76, 196, 0.7)',
    },
    {
      id: 2641673,
      name: 'Newcastle upon Tyne',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Commonly known as Newcastle, is a city in Tyne and Wear, North East England, 277 miles north of London on the northern bank of the River Tyne',
      color: 'rgba(229, 35, 38, 0.7)',
    },
    {
      id: 2618425,
      name: 'Copenhagen',
      description: 'is the capital and the largest city of Portugal, with an estimated population of 505,526[1] within its administrative limits in an area of 100.05 km2.[3] Its urban area extends beyond the city\'s administrative limits with a population of around 2.8 million people, being the 11th-most populous urban area in the European Union.[4] About 3 million people live in the Lisbon Metropolitan Area, including the Portuguese Riviera, (which represents approximately 27% of the country\'s population).',
      excerpt: 'Is the capital and most populous city of Denmark. As of July 2018, the city has a population of 777,218',
      color: 'rgba(167, 116, 3, 0.7)',
    },
  ];

  constructor() { }

  getCities(): City[] {
    return this._cities;
  }

  getCurrentCity( id: number ): City {
    return this._cities.filter( city => city.id == id )[0];
  }

  addGroupWeather( group: City[], WeatherGroup:fromWeather.CityGroupWeather ): City[] {
    return group.map( city => {
      city.weather = WeatherGroup.list.filter( cityWeather => cityWeather.id == city.id )[0];
      console.log(city);
      return city;
    });
  }

  addWeataher( city: City, weather:fromWeather.CityWeather ): City {
      city.weather = weather;
      return city;
  }
  
  addForecast( city: City, forecast:fromWeather.CityForecast ): City {
      city.forecast = forecast;
      return city;
  }

}
