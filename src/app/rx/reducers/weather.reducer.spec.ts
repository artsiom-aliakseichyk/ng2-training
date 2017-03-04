import { initialWeatherState, weatherReducer } from './weather.reducer'
import { WeatherActions } from '../actions/weather.actions';

const initialState = {
    cityDetails: [],
    error: null
};

const cityDetailsPayload = {
	cityDetails: ['anyTestData']
};

const cityDetailsErrorPayload = {
	error: 'anyError'
};

const cityDetailsError = 'anyError';

const cityDetails = ['anyTestData'];

describe('weather reducer', () => {
    it('should return the initial state', () => {
        expect(weatherReducer(undefined, { type: 'anystate' })).toEqual(initialState)
    });

    it('should handle WEATHER_LOAD_FAILED', () => {
        expect(
            weatherReducer([], {
                type: WeatherActions.WEATHER_LOAD_FAILED,
                payload: cityDetailsError
            })
        ).toEqual(cityDetailsErrorPayload)
    });

    it('should handle GET_POSITION_SUCCESS', () => {
        expect(
            weatherReducer([], {
                type: WeatherActions.WEATHER_LOAD_SUCCESS,
                payload: cityDetails
            })
        ).toEqual(cityDetailsPayload)
    })
}) 