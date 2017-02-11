import { Action } from '@ngrx/store';
import { WeatherActions } from '../actions';
import { cityDetails, citiesReducer } from '../../interfaces/interfaces';

export const initialWeatherState: citiesReducer = {
    cityDetails: [],
    error: null
};

export function weatherReducer(
		state: citiesReducer = initialWeatherState,
		action: Action
	): citiesReducer {

	switch (action.type) {
		case WeatherActions.WEATHER_LOAD_SUCCESS: {
			return Object.assign({}, state, {cityDetails: action.payload});
		}
		case WeatherActions.WEATHER_LOAD_FAILED: {
			return Object.assign({}, state, {error: action.payload});
		}
	}
}