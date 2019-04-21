import { Action } from '@ngrx/store';

export const METRIC: string = '[UNITS] Metric units';
export const IMPERIAL: string = '[UNITS] Imperial units';
export const TOGGLE: string = '[UNITS] Toggle units system';
export const units = {
    METRIC: {
        name: 'metric',
        temperatureUnits: '°C',
        speedUnits: 'Km/h',
    },
    IMPERIAL: {
        name: 'imperial',
        temperatureUnits: '°K',
        speedUnits: 'Mi/h',
    }
}

export class MetricUnitsAction implements Action {
    readonly type = METRIC
}

export class ImperialUnitsAction implements Action {
    readonly type = IMPERIAL
}

export class ToggleAction implements Action {
    readonly type = TOGGLE
}

export type actions = MetricUnitsAction | ImperialUnitsAction | ToggleAction;