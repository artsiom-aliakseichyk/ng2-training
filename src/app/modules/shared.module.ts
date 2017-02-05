import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
// pipes
import { TemperatureConverter } from '../shared/pipes/celsius2kelvin.pipe';
import { FloorPipe } from '../shared/pipes/floor.pipe';
import { GetCityWeather } from '../shared/pipes/getCityWeather.pipe';
import { GetData } from '../shared/pipes/getData.pipe';
import { AddSignPipe } from '../shared/pipes/sign.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [TemperatureConverter,
        FloorPipe,
        GetCityWeather,
        GetData,
        AddSignPipe
    ],
    exports: [
        TemperatureConverter,
        FloorPipe,
        GetCityWeather,
        GetData,
        AddSignPipe
    ]
})

export class SharedModule { }