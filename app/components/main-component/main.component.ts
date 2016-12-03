import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import GoogleMapService from '../../services/google-map-init.service';
import { cityDetails, Coords } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-main',
    templateUrl: './main.component.html'
})

export class WeatherMainComponent implements OnInit {
    cityDetails: cityDetails[][];
    constructor(private WeatherApi: WeatherApiService,
                private MapInit: GoogleMapService) {}

    ngOnInit() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position: Position) => {
                let currenLocation: Coords = position.coords;
                this.WeatherApi.getWeatherData({
                    latitude: currenLocation.latitude,
                    longitude: currenLocation.longitude
                }).subscribe(
                    response => {
                        this.cityDetails = response;
                        this.MapInit.init(currenLocation);
                    });
                }
            );
        }
    }
}
