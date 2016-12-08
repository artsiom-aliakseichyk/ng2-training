import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Coords, cityDetails } from '../interfaces/interfaces';
import { CONSTS } from '../config/constants';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherApiService {
    private weatherURL = CONSTS.WEATHER_URL;

    constructor(private http: Http) {}

    public getWeatherData(position: Coords): Observable<cityDetails[]> {
        const API_KEY: string = CONSTS.API_KEY;
        const endPoint: string = 'find';
        const resultsNum = 50;
        let searchParams = new URLSearchParams();
        searchParams.set('units', CONSTS.UNITS);
        searchParams.set('APPID', API_KEY);
        searchParams.set('lon', position.longitude.toString());
        searchParams.set('lat', position.latitude.toString());
        searchParams.set('cnt', CONSTS.ITEMS_IN_RESPONSE);
        return this.http.get(this.weatherURL + endPoint, {search: searchParams})
                .map(response => response.json());
    }
}
