import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "./shared.module";
import { MapModule } from "./map.module";

import { WeatherMainComponent } from '../components/weather-main-component/weather-main.component';
import { CityDataInfoComponent } from '../components/citydata-sample/citydata.component';
import { CityDataAddComponent } from '../components/citydata-add-city/citydata-addcity.component';
import { WeatherCityComponent } from '../components/citylist-component/citylist.component';
import { WeatherCityPaginatorComponent } from '../components/citylist-paginator-component/citylist-paginator.component';
import { FilterComponent } from '../components/filter-component/filter.component';
import { WeatherIconComponent } from '../components/weather-icon-component/weather-icon.component';
import { FilterMessageComponent } from '../components/filter-error-component/filter-error.component';
import { TemperatureKeyComponent } from '../components/custom-form-control-component/custom-control.component';
import { HideEqualWeatherDirective } from '../shared/directives/hideEqualWeather.directive';
import { TempColorDirective } from '../shared/directives/tempcolor.directive';
import { WindDirectionDirective } from '../shared/directives/wind-direction.directive';

import { WeatherApiService } from '../services/weather-api.service';
@NgModule({
    imports: [
        CommonModule,
        MapModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [
        WeatherMainComponent,
        CityDataInfoComponent,
        CityDataAddComponent,
        WeatherCityComponent,
        WeatherCityPaginatorComponent,
        WeatherIconComponent,
        FilterComponent,
        HideEqualWeatherDirective,
        TempColorDirective,
        WindDirectionDirective,
        FilterMessageComponent,
        TemperatureKeyComponent
    ],
    providers: [
        WeatherApiService
    ],
    exports: [WeatherMainComponent]
})
export class WeatherModule { }