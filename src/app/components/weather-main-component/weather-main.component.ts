import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Response } from '@angular/http';
import { WeatherApiService } from '../../services/weather-api.service';
import { GoogleMapService } from '../../services/map-init.service';
import { cityDetails, Coords, emmitChangeFavObject } from '../../interfaces/interfaces';
import { CONSTS } from '../../config';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }     from 'rxjs/Observable';
import { LoggerService } from '../../services/logger.service';

@Component({
    selector: 'weather-main',
    templateUrl: './weather-main.template.html',
    styleUrls: ['./weather-main.style.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherMainComponent implements OnInit, OnDestroy, OnChanges {
    cityDetails: cityDetails[];
    citiesToShow: cityDetails[];
    pagesArr: number[];
    numOfPages: number;
    subscription: Subscription;
    zoneOnUnstable: Subscription;
    zoneOnStable: Subscription;
    currentPage: number = 0;
    geoposition: Promise<Position>;
    weatherData: Observable<cityDetails[]>;
    extractWeatherData: Observable<cityDetails[]>;
    pageStartItemIndex: number = 0;
    pagesFinishItemIndex: number = CONSTS.ITEMS_IN_PAGE;


    constructor(private WeatherApi: WeatherApiService,
                private MapInit: GoogleMapService,
                private cd: ChangeDetectorRef,
                private zone: NgZone,
                private logger: LoggerService) {}

    ngOnInit() {
        // setInterval(() => this.getCityList(), 5000);
        this.getCityList();
        this.zoneStableCheck();
    }

    ngOnChanges(any?) {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.zoneOnStable.unsubscribe();
        this.zoneOnUnstable.unsubscribe();
    }

    getCityList() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                let currentLocation: Coords = position.coords;
                this.weatherData = this.extractWeatherData = this.WeatherApi.getWeatherData({
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude
                });
                this.subscription = this.WeatherApi.getWeatherData({
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude
                }).subscribe(
                    response => {
                        this.cityDetails = response;
                        this.numOfPages = Math.ceil(this.cityDetails.length / CONSTS.ITEMS_IN_PAGE)
                        this.pagesArr = this.arrayOfPages(this.numOfPages);
                        this.MapInit.init(currentLocation);
                        this.logger.success("App init!");
                    });
               }
            );
        }
        // this.cd.markForCheck();
    }
    changePage(page: number) {
        this.currentPage = page;
        this.pageStartItemIndex = this.currentPage * CONSTS.ITEMS_IN_PAGE;
        this.pagesFinishItemIndex = (this.currentPage + 1) * CONSTS.ITEMS_IN_PAGE;
        this.logger.log("Page: " + (this.currentPage + 1));
    }

    deleteCityInfo(id: number) {
        let tempNumOfPages: number;
        for (let i = 0; i < this.cityDetails.length; i++) {
            if (this.cityDetails[i].id === id) {
                this.cityDetails.splice(i, 1);
                tempNumOfPages = Math.ceil(this.cityDetails.length / CONSTS.ITEMS_IN_PAGE);
                if (tempNumOfPages !== this.numOfPages) {
                    this.pagesArr = this.arrayOfPages(tempNumOfPages);
                }
            }
        }
    }

    addCityInfo(cityInfo: cityDetails) {
        let tempNumOfPages: number;
        cityInfo.dt = Date.now() / 1000;
        this.cityDetails.unshift(cityInfo);
        tempNumOfPages = Math.ceil(this.cityDetails.length / CONSTS.ITEMS_IN_PAGE);
        if (tempNumOfPages !== this.numOfPages) {
            this.pagesArr = this.arrayOfPages(tempNumOfPages);
        }
    }

    changeFavStatus(itemToChange: emmitChangeFavObject) {
        for (let i = 0; i < this.cityDetails.length; i++ ) {
            if (this.cityDetails[i].id === itemToChange.id) {
                if (itemToChange.checkbox) {
                    this.cityDetails[i].fav = true;
                }
                else {
                    this.cityDetails[i].fav = false;
                }
                this.logger.info(this.cityDetails[i].name);
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

    zoneStableCheck() {
        let diffTime: number;
        let initTime: number;
        let now = performance && performance.now ? performance.now.bind(performance) : Date.now;

        this.zoneOnUnstable = this.zone
            .onUnstable
            .subscribe((data: void) => {
                diffTime = 0;
                initTime = now();
        });

        this.zoneOnStable = this.zone
            .onStable
            .subscribe((data: void) => {
                diffTime += (now() - initTime);
                console.log('Change in: ', Math.floor(diffTime * 100) / 100);
        });
    }
}
