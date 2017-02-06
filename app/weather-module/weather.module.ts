import { NgModule } from '@angular/core';
// import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "../shared-module/shared.module";
import { MapModule } from "../map-module/map.module";
import { WeatherMainComponent } from './components/main-component/main.component';
import { CityDataInfoComponent } from './components/citydata-sample/citydata.component';
import { CityDataAddComponent } from './components/citydata-add-city/citydata-addcity.component';
import { WeatherCityComponent } from './components/citylist-component/citylist.component';
import { WeatherCityPaginatorComponent } from './components/citylist-paginator-component/citylist-paginator.component';

import { WeatherIconComponent } from './components/weather-icon-component/weather-icon.component';
import { HideEqualWeatherDirective } from './directives/hideEqualWeather.directive';
import { TempColorDirective } from './directives/tempcolor.directive';
import { WindDirectionDirective } from './directives/wind-direction.directive';

import { WeatherApiService } from './services/weather-api.service';
@NgModule({
    imports: [
        // CommonModule,
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
        HideEqualWeatherDirective,
        TempColorDirective,
        WindDirectionDirective
    ],
    providers: [
        WeatherApiService
    ],
    exports: [WeatherMainComponent]
})
export class WeatherModule { }