import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'weather-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherMapComponent {}
