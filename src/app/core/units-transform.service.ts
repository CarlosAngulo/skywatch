import { Injectable } from '@angular/core';
import * as fromUnitsAction from '../core/units.actions';

@Injectable({
  providedIn: 'root'
})
export class UnitsTransformService {

  constructor() { }

  toggleTemp( temp: number, currentUnits: string ) {
    
    let weatherFactor = ( temp - 32) * 5/9;
    
    if ( currentUnits ===  fromUnitsAction.IMPERIAL ) {
      weatherFactor = ( temp * 9/5 ) + 32;
    }

    return weatherFactor

  }

  toggleSpeed( speed, currentUnits: string ) {

    let speedFactor = 1.60934;
    
    if ( currentUnits ===  fromUnitsAction.IMPERIAL ) {
      speedFactor = 0.621371;
    }

    return speed * speedFactor

  }

}
