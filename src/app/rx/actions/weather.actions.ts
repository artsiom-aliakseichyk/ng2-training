import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Response } from "@angular/http";

import { cityDetails, Coords } from '../../interfaces/interfaces';

@Injectable()
export class WeatherActions {

    static WEATHER_GET: string = '[WEATHER] GET DATA';
    Load(coords: Coords): Action {
        return {
            type: WeatherActions.WEATHER_GET,
            payload: coords
        };
    }

    static WEATHER_LOAD_SUCCESS: string = '[WEATHER] LOAD SUCCESS';
    LoadSuccess(cityDetails: cityDetails[]): Action {
        return {
            type: WeatherActions.WEATHER_LOAD_SUCCESS,
            payload: cityDetails
        };
    }

    static WEATHER_LOAD_FAILED: string = '[WEATHER] LOAD FAILED';
    LoadFailed(error: Response): Action {
        return {
            type: WeatherActions.WEATHER_LOAD_FAILED,
            payload: error
        };
    }
}