import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { weatherReducer } from './weather.reducer';
// import '@ngrx/core/add/operator/select';

import { citiesReducer } from '../../interfaces/interfaces';

export interface WeatherState {
    weather: citiesReducer;
}

const reducers = {
	weather: weatherReducer
};

const devReducer: ActionReducer<WeatherState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
	return devReducer(state, action);
}
