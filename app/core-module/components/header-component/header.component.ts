import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'weather-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherHeaderComponent {}
