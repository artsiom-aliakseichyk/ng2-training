import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
// pipes
import { TemperatureConverter } from './pipes/celsius2kelvin.pipe';
import { FloorPipe } from './pipes/floor.pipe';
import { GetCityWeather } from './pipes/getCityWeather.pipe';
import { GetData } from './pipes/getData.pipe';
import { AddSignPipe } from './pipes/sign.pipe';

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
        AddSignPipe,
        CommonModule
    ]
})

export class SharedModule { }