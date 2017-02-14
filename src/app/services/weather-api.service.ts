import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Coords, cityDetails } from '../interfaces/interfaces';
import { CONSTS } from '../config';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
                .map(response => response.json().list);
    }

    public getCityWeatherData(id: number): Observable<any> {
        if (id) {
            const API_KEY: string = CONSTS.API_KEY;
            const endPoint: string = 'weather';
            let searchParams = new URLSearchParams();
            searchParams.set('units', CONSTS.UNITS);
            searchParams.set('APPID', API_KEY);
            searchParams.set('id', id.toString());
            return this.http.get(this.weatherURL + endPoint, {search: searchParams})
                .map(response => response.json())
                .catch(() => Observable.of(false));
        }
        
    }
}