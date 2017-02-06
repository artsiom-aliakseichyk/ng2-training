import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { weatherData } from '../../interfaces/interfaces';

@Directive({
    selector: '[hideEqualWeather]'
})
export class HideEqualWeatherDirective {
    constructor(
        private templateRef: TemplateRef<Object>,
        private viewContainer: ViewContainerRef
    ) {}
    @Input() set hideEqualWeather(weather: weatherData) {
        if (weather.temp === weather.temp_min &&
            weather.temp === weather.temp_max) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}