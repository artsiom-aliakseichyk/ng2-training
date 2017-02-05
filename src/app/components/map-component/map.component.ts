import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'weather-map',
    templateUrl: './map.layout.html',
    styleUrls: ['./map.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherMapComponent {}
