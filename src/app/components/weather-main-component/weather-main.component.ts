import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { WeatherApiService } from '../../services/weather-api.service';
// import { GoogleMapService } from '../../services/map-init.service';
import { cityDetails, Coords, emmitChangeFavObject, citiesReducer } from '../../interfaces/interfaces';
import { CONSTS } from '../../config';
import { Subscription }   from 'rxjs/Subscription';
import { Observable }     from 'rxjs/Observable';
import { LoggerService } from '../../services/logger.service';
import { viewModel } from '../../interfaces/interfaces';
import { VIEW_MODEL_CONFIG } from '../../config';

import { Store }        from '@ngrx/store';
import { WeatherActions } from '../../rx/actions/weather.actions';
import { WeatherState} from '../../rx/reducers';

@Component({
    selector: 'weather-main',
    templateUrl: './weather-main.template.html',
    styleUrls: ['./weather-main.style.css']
})

export class WeatherMainComponent implements OnInit, OnDestroy {
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
    pagesFinishItemIndex: number = VIEW_MODEL_CONFIG.citieslimit;
    viewmodel:viewModel = VIEW_MODEL_CONFIG;


    constructor(
                private store: Store<WeatherState>,
                private weatherActions: WeatherActions,
                // private MapInit: GoogleMapService,
                private logger: LoggerService) {}

    ngOnInit() {
        this.getCityList();
    }

    ngOnChanges(any?) {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getCityList() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                let currentLocation: Coords = position.coords;
                this.store.dispatch(this.weatherActions.Load(currentLocation));

                this.subscription = this.store
                    .select((state: WeatherState) => state.weather)
                    .subscribe(
                        (response: citiesReducer): void => {
                            if (response) {
                                console.log(response);
                                if (response.cityDetails) {
                                    this.cityDetails = response.cityDetails;
                                    this.numOfPages = Math.ceil(this.cityDetails.length / VIEW_MODEL_CONFIG.citieslimit)
                                    this.pagesArr = this.arrayOfPages(this.numOfPages);
                                    // this.MapInit.init(currentLocation);
                                    this.logger.success("App init!");
                                }
                                else {
                                    console.log(response.error.statusText);
                                } 
                            }
                        }
                    )
               }
            );
        }
    }

    changePage(page: number) {
        this.currentPage = page;
        this.pageStartItemIndex = this.currentPage * this.viewmodel.citieslimit;
        this.pagesFinishItemIndex = (this.currentPage + 1) * this.viewmodel.citieslimit;
        this.logger.log("Page: " + (this.currentPage + 1));
    }

    deleteCityInfo(id: number) {
        let tempNumOfPages: number;
        for (let i = 0; i < this.cityDetails.length; i++) {
            if (this.cityDetails[i].id === id) {
                this.cityDetails.splice(i, 1);
                tempNumOfPages = Math.ceil(this.cityDetails.length / this.viewmodel.citieslimit);
                if (tempNumOfPages !== this.numOfPages) {
                    this.pagesArr = this.arrayOfPages(tempNumOfPages);
                }
            }
        }
    }

    updateViewModel(viewModel: viewModel) {
        this.viewmodel = viewModel;
        this.viewmodel.tempkey = '2' + this.viewmodel.tempkey.toUpperCase();
        if (viewModel.citieslimit) {
            //reset pages
            this.pageStartItemIndex = 0;
            this.pagesFinishItemIndex = viewModel.citieslimit;
            this.numOfPages = Math.ceil(this.cityDetails.length / viewModel.citieslimit);
            this.pagesArr = this.arrayOfPages(this.numOfPages);
        }
    }

    addCityInfo(cityInfo: cityDetails) {
        let tempNumOfPages: number;
        cityInfo.dt = Date.now() / 1000;
        this.cityDetails.unshift(cityInfo);
        tempNumOfPages = Math.ceil(this.cityDetails.length / this.viewmodel.citieslimit);
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
}
