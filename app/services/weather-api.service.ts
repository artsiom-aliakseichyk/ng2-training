import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Coords, cityDetails } from '../interfaces/interfaces';
import { CONSTS } from '../config/constants';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherApiService {
    private weatherURL = CONSTS.WEATHER_URL;

    constructor(private http: Http) {}

    getWeatherData(position: Coords): Observable<cityDetails[][]> {
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
                .map(this.extractData);
    }

    private extractData(response: Response): cityDetails[][] {
        let cityDetails = response.json().list;
        let cityPage: cityDetails[][] = [];
        let cityPages: cityDetails;
        let pageNum: number = 0;
        cityPage.push([]);
        for ( let i = 0; i < cityDetails.length; i++ ) {
            cityPage[pageNum].push(cityDetails[i]);
            if ((i !== 0 && (i + 1) % CONSTS.ITEMS_IN_PAGE === 0) || i === cityDetails.length - 1 ) {
                if (cityDetails.length - 1 !== i) {
                    cityPage.push([]);
                    pageNum += 1;
                }
            }
        }
        return cityPage;
    }
}
