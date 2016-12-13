import { Component } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { CONSTS } from '../../config/constants';
import { Observable }     from 'rxjs/Observable';

@Component({
    selector: 'city-data',
    templateUrl: './citydata.component.html',
    styleUrls: ['./citydata.component.less']
})

export class CityDataInfoComponent {
    private weatherURL = CONSTS.WEATHER_URL;
    private API_KEY = CONSTS.API_KEY;
    private endPoint: string = 'weather';
    cityName: string;
    cityInfo: Observable<number>;
    constructor(private http: Http) {}

    getCityWeather(city: string) {
        console.log(city);
        this.cityName = city;
        this.cityInfo = this.getObservableCityWeather(city);
        // let searchParams = new URLSearchParams();
        // searchParams.set('APPID', this.API_KEY);
        // searchParams.set('q', city);
        // this.http.get(this.weatherURL + this.endPoint, {search: searchParams})
        //         .map(response => response.json().main).subscribe(response => {
        //             console.log(response);
        //         })
    }

    getObservableCityWeather(city: string): Observable<number> {
        let searchParams = new URLSearchParams();
        searchParams.set('APPID', this.API_KEY);
        searchParams.set('q', city);
        return this.http.get(this.weatherURL + this.endPoint, {search: searchParams})
                .map(response => response.json().main.temp);
    }
}