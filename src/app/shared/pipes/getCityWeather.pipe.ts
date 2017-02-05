import { Pipe, PipeTransform } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { CONSTS } from '../../config';

@Pipe({
    name: 'sgWeather',
    pure: false
})

export class GetCityWeather implements PipeTransform {
    private weatherURL = CONSTS.WEATHER_URL;
    private API_KEY = CONSTS.API_KEY;
    private endPoint: string = 'weather';
    private cachedCity: string = '';
    private cachedText: string = '';

    constructor(private http: Http) {}

    transform(value: string) {
        let returnText: string;
        if (value !== undefined) {
            if (value !== this.cachedCity) {
                this.cachedCity = value;
                let searchParams = new URLSearchParams();
                searchParams.set('APPID', this.API_KEY);
                searchParams.set('q', value);
                this.http.get(this.weatherURL + this.endPoint, {search: searchParams})
                .map(response => response.json().main)
                .subscribe(response => {
                    this.cachedText = response.temp;
                })
            }
        }
        return this.cachedText;
    }
}