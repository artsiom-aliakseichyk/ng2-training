import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { WeatherApiService } from '../../services/weather-api.service';
import GoogleMapService from '../../services/google-map-init.service';
import { cityDetails, Coords } from '../../interfaces/interfaces';
import { CONSTS } from '../../config/constants';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'weather-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})

export class WeatherMainComponent implements OnInit, OnDestroy {
    cityDetails: cityDetails[][];
    subscription: Subscription
    constructor(private WeatherApi: WeatherApiService,
                private MapInit: GoogleMapService) {}

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                let currenLocation: Coords = position.coords;
                this.subscription = this.WeatherApi.getWeatherData({
                    latitude: currenLocation.latitude,
                    longitude: currenLocation.longitude
                }).subscribe(
                    response => {
                        this.cityDetails = this.extractData(response);
                        this.MapInit.init(currenLocation);
                    });
                }
            );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private extractData(response: cityDetails[]): cityDetails[][] {
        let cityDetails = response;
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
