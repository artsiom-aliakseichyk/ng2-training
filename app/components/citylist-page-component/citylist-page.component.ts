import { Component, Input } from '@angular/core';

import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-city-page',
    templateUrl: './citylist-page.component.html'
})

export class WeatherCityPageComponent {
    @Input()
    cityDetails: cityDetails;
}
