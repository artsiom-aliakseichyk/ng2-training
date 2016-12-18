import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { WeatherApiService } from '../../services/weather-api.service';
import GoogleMapService from '../../services/google-map-init.service';
import { cityDetails, Coords, emmitChangeFavObject } from '../../interfaces/interfaces';
import { CONSTS } from '../../config/constants';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }     from 'rxjs/Observable';


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
    geoposition: Promise<Position>;
    weatherData: Observable<cityDetails[]>;
    extractWeatherData: Observable<cityDetails[]>;
    pageStartItemIndex: number = 0;
    pagesFinishItemIndex: number = CONSTS.ITEMS_IN_PAGE;


    constructor(private WeatherApi: WeatherApiService,
                private MapInit: GoogleMapService) {}

    ngOnInit() {
        if (navigator.geolocation) {
            /*navigator.geolocation.getCurrentPosition((position: Position) => {
                let currentLocation: Coords = position.coords;
                // this.weatherData = this.extractWeatherData = this.WeatherApi.getWeatherData({
                //     latitude: currentLocation.latitude,
                //     longitude: currentLocation.longitude
                // });
                this.subscription = */this.WeatherApi.getWeatherData({
                    latitude: /*currentLocation.latitude*/111,
                    longitude: /*currentLocation.longitude*/111
                }).subscribe(
                    response => {
                        this.cityDetails = response;
                        console.log(this.cityDetails);
                        this.numOfPages = this.arrayOfPages(Math.ceil(this.cityDetails.length / CONSTS.ITEMS_IN_PAGE));
                        // this.MapInit.init(currentLocation);
                    });
            /*   }
            );*/
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    changePage(page: number) {
        this.currentPage = page;
        this.pageStartItemIndex = this.currentPage * CONSTS.ITEMS_IN_PAGE;
        this.pagesFinishItemIndex = (this.currentPage + 1) * CONSTS.ITEMS_IN_PAGE;
    }
    deleteCityInfo(id: number) {
        for (let i = 0; i < this.cityDetails.length; i++) {
            if (this.cityDetails[i].id === id) {
                this.cityDetails.splice(i, 1);
            }
        }
    }

    changeFavStatus(itemToChange: emmitChangeFavObject) {
        console.log(itemToChange);
        for (let i = 0; i < this.cityDetails.length; i++ ) {
            if (this.cityDetails[i].id === itemToChange.id) {
                if (itemToChange.checkbox) {
                    this.cityDetails[i].fav = true;
                }
                else {
                    this.cityDetails[i].fav = false;
                }
            }
        }
    }

    arrayOfPages(pages: number): number[] {
        let pagesArr: number[] = [];
        for (let i = 0; i < pages; i++) {
            pagesArr.push(i);
        }
        return pagesArr;
    }
}
