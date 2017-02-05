import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'weather-footer',
    templateUrl: './footer.layout.html',
    styleUrls: ['./footer.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherFooterComponent {}
