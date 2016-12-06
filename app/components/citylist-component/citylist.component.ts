import { Component, Input } from '@angular/core';

import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-city-item',
    templateUrl: './citylist.component.html',
    styleUrls: ['./citylist.component.less']
})

export class WeatherCityComponent {
    @Input()
    cityDetails: cityDetails;
}
