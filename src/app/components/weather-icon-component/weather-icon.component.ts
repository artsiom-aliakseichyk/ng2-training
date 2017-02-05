import { Component, Input } from '@angular/core';
import { weatherIcon } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-icon',
    templateUrl: './weather-icon.layout.html'
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherIconComponent {
    @Input()
    weather: weatherIcon;
}