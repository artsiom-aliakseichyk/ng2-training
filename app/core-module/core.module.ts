import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';

import { WeatherHeaderComponent } from './components/header-component/header.component';
import { WeatherFooterComponent } from './components/footer-component/footer.component';

import { LoggerService } from './logger';

@NgModule({
    declarations: [
        WeatherHeaderComponent,
        WeatherFooterComponent
    ],
    providers: [
        LoggerService
    ],
    exports: [
        WeatherHeaderComponent,
        WeatherFooterComponent
    ]
})

export class CoreModule { }