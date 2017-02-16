import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';

import { WeatherHeaderComponent } from '../components/header-component/header.component';
import { WeatherFooterComponent } from '../components/footer-component/footer.component';
import { NotFoundComponent } from '../components/404-component/404.component';
import { LoggerService } from '../services/logger.service';

@NgModule({
    declarations: [
        WeatherHeaderComponent,
        WeatherFooterComponent,
        NotFoundComponent
    ],
    providers: [
        LoggerService
    ],
    exports: [
        WeatherHeaderComponent,
        WeatherFooterComponent,
        NotFoundComponent
    ]
})

export class CoreModule { }