import { Component, Input } from '@angular/core';

import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-city-item',
    templateUrl: './citylist.component.html'
})

export class WeatherCityComponent {
    @Input()
    cityDetails: cityDetails;

    constructor() {}
}
