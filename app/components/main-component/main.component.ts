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
    cityDetails: cityDetails[];
    citiesToShow: cityDetails[];
    numOfPages: number[];
    subscription: Subscription;
    currentPage: number = 0;

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
                        this.cityDetails = response;
                        this.citiesToShow = response.slice(0, CONSTS.ITEMS_IN_PAGE);
                        this.numOfPages = this.arrayOfPages(Math.ceil(this.cityDetails.length / CONSTS.ITEMS_IN_PAGE));
                        this.MapInit.init(currenLocation);
                    });
                }
            );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    changePage(page: number) {
        this.currentPage = page;
        this.citiesToShow = this.cityDetails.slice(this.currentPage * CONSTS.ITEMS_IN_PAGE, (this.currentPage + 1) * CONSTS.ITEMS_IN_PAGE);
    }

    arrayOfPages(pages: number): number[] {
        let pagesArr: number[] = [];
        for (let i = 0; i < pages; i++) {
            pagesArr.push(i);
        }
        return pagesArr;
    }
}
