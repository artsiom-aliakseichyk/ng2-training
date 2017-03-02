import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestMethod, RequestOptions, Headers } from '@angular/http';
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
        let search = new URLSearchParams();
        // let headers = new Headers({'From': 'user@example.com'});
        search.set('units', CONSTS.UNITS);
        search.set('APPID', API_KEY);
        search.set('lon', position.longitude.toString());
        search.set('lat', position.latitude.toString());
        search.set('cnt', CONSTS.ITEMS_IN_RESPONSE);

        const options: RequestOptions = new RequestOptions({
            method: RequestMethod.Get, search
        });
        return this.http.get(endPoint, options)
                .map(response => response.json().list);
    }

    public getCityWeatherData(id: number): Observable<any> {
        if (id) {
            const API_KEY: string = CONSTS.API_KEY;
            const endPoint: string = 'weather';
            let search = new URLSearchParams();
            search.set('units', CONSTS.UNITS);
            search.set('APPID', API_KEY);
            search.set('id', id.toString());

            const options: RequestOptions = new RequestOptions({
                method: RequestMethod.Get, search
            });

            return this.http.get(this.weatherURL + endPoint, search)
                .map(response => response.json())
                .catch(() => Observable.of(false));
        }
        
    }
}
