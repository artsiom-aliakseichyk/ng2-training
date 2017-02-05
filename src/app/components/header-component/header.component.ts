import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'weather-header',
    templateUrl: './header.layout.html',
    styleUrls: ['./header.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherHeaderComponent {}
