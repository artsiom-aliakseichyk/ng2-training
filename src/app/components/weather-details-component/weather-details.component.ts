import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'weather-details',
    templateUrl: './weather-details.layout.html',
    styleUrls: ['./weather-details.style.css']

})

export class WeatherDetailsComponent implements OnInit {
	weatherDetails: any;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
        this.weatherDetails = this.route.snapshot.data['cityWeatherDetails'];
        console.log(this.weatherDetails)
	}
}
