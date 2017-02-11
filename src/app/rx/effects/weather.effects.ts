import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherActions } from '../actions/weather.actions';
import { WeatherApiService } from '../../services/weather-api.service';
import { cityDetails, Coords } from '../../interfaces/interfaces';

@Injectable()
export class WeatherEffects {
	constructor(
		private weatherApi: WeatherApiService,
		private weatherActions: WeatherActions,
		private actions$: Actions
	) { }

	@Effect() getCitiesWeather$: Observable<{type: string}> = this.actions$
		.ofType(WeatherActions.WEATHER_GET)
		.map((action: Action) => action.payload)
		.switchMap((coords: Coords) => this.weatherApi.getWeatherData(coords)
			.map((cities: cityDetails[]) => this.weatherActions.LoadSuccess(cities))
			.catch((error: Response) => Observable.of({
				type: WeatherActions.WEATHER_LOAD_FAILED,
				payload: {
					status: error.text,
					statusText: error.statusText
				}
			}))
		);
}